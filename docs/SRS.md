1. Introduction
Purpose
Scope
Definitions
Intended Audience
2. Overall Description
Product Perspective
Product Functions
User Classes
Operating Environment
Assumptions
3. Functional Requirements

Every feature in the system.

Example:

Authentication

FR-001

The system shall allow users to register using:

First Name
Last Name
Email
Phone Number
Password

FR-002

The system shall validate email uniqueness.

FR-003

Passwords shall be encrypted before storage.

FR-004

The system shall issue a JWT after successful login.

Parking Search

FR-020

The system shall display available parking lots.

FR-021

The system shall display:

Name
Address
Available spaces
Price
Distance
Reservation

FR-030

The system shall allow authenticated users to reserve a parking space.

FR-031

Reservations shall expire after the configured grace period if the user does not arrive.

Provider

FR-040

Parking providers shall be able to:

Add parking lots
Edit parking lots
Delete parking lots
Update parking capacity
Administrator

FR-050

Administrators shall:

Manage users
Manage providers
Manage parking lots
View reports
Non-Functional Requirements

These describe the quality of the software.

Performance

Pages should load in less than 2 seconds under normal conditions.

Availability

Target uptime:

99%

Security
JWT Authentication
HTTPS
Password hashing
Input validation
Role-Based Access Control
Scalability

Support future expansion without significant redesign.

Maintainability

Follow clean architecture and modular coding practices.

Usability

Responsive design for desktop, tablet, and mobile devices.

User Roles

We'll define permissions for each role.

Guest

Can:

View parking lots
Search parking
Register

Cannot:

Reserve parking
Access dashboards
Driver

Can:

Reserve parking
Cancel reservations
View history
Manage profile
Parking Provider

Can:

Manage parking lots
Manage parking spaces
View reservations
View reports
Administrator

Has full system access.

Use Cases

We'll create detailed use cases.

Example:

UC-001

User Registration

Actor:

Guest

Precondition:

User is not registered.

Flow:

User opens Register page.
User enters information.
System validates inputs.
System stores user.
System redirects to Login.

Alternative Flow:

Email already exists.

Acceptance Criteria

Every feature must have acceptance criteria.

Example:

Feature:

Login

Acceptance Criteria:

Valid credentials allow login.
Invalid credentials display an error.
JWT token is generated.
User is redirected to the correct dashboard based on their role.
Why this matters

When we begin coding, we won't ask questions like:

"What should happen if a reservation expires?"

or

"Can a guest make a reservation?"

The SRS will already answer those questions.