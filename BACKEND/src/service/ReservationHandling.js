import ReservationRepository from "../repositories/ReservationRepository.js";

class ReservationHandling {
    constructor() {
        this.reservationRepository = new ReservationRepository();
    }

    async getAllReservations() {
        try {
          const reservations = await this.reservationRepository.getAllReservations();
    
          return reservations;
        } catch (error) {
          console.log(error);
        }
      }
    

    async createReservation(reservation) {
        try {
            const newReservation = await this.reservationRepository.createReservation(reservation);

            return newReservation;
        } catch (error) {
            console.error(error);
        }
    }
}

export default ReservationHandling;