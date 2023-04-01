import request from "supertest"
import { app } from "@/app"
import { afterAll, beforeAll, describe, expect, it } from "vitest"
import { createAndAuthenticatedUser } from "@/utils/test/create-and-authenticated-user"
import { prisma } from "@/lib/prisma"

describe('Create Check-in (e2e)', () => {
    beforeAll(async () => {
        await app.ready()
    })

    afterAll(async () => {
        await app.close()
    })

    it('should be able to create a check-in', async () => {
        const { token } = await createAndAuthenticatedUser(app)

		const gym = await prisma.gym.create({
			data: {
				title: 'JavaScript Gym',
				latitude: -26.8529016,
            	longitude: -52.3907194
			}
		})

        const response = await request(app.server)
            .post(`/gyms/${gym.id}/check-ins`)
            .set('Authorization', `Bearer ${token}`)
            .send({
				latitude: -26.8529016,
            	longitude: -52.3907194
			})

        expect(response.statusCode).toEqual(201)
    })
})