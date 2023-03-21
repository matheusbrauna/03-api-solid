import { Gym, Prisma } from '@prisma/client'

export interface FetchNearByGymsParams {
  latitude: number
  longitude: number
}

export interface GymsRepository {
  findById(gymId: string): Promise<Gym | null>
  fetchManyNearby(params: FetchNearByGymsParams): Promise<Gym[]>
  searchMany(query: string, page: number): Promise<Gym[]>
  create(data: Prisma.GymCreateInput): Promise<Gym>
}
