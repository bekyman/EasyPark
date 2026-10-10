using EasyPark.Domain.Enums;

namespace EasyPark.Domain.Entities;

public class Payment
{
    public Guid Id { get; set; }

    public Guid ReservationId { get; set; }

    public decimal Amount { get; set; }

    public PaymentStatus Status { get; set; }

    public string PaymentMethod { get; set; } = string.Empty;

    public string? TransactionReference { get; set; }

    public DateTime CreatedAt { get; set; }

    public Reservation Reservation { get; set; } = null!;
}