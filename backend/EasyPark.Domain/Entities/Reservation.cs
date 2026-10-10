using EasyPark.Domain.Enums;

namespace EasyPark.Domain.Entities;

public class Reservation
{
    public Guid Id { get; set; }

    public Guid CustomerId { get; set; }

    public Guid VehicleId { get; set; }

    public Guid ParkingSpaceId { get; set; }

    public DateTime StartTime { get; set; }

    public DateTime EndTime { get; set; }

    public ReservationStatus Status { get; set; }

    public decimal TotalAmount { get; set; }

    public DateTime CreatedAt { get; set; }

    public User Customer { get; set; } = null!;

    public Vehicle Vehicle { get; set; } = null!;

    public ParkingSpace ParkingSpace { get; set; } = null!;

    public Payment? Payment { get; set; }
}