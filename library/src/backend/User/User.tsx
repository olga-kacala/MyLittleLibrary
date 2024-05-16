/**
 * Represents a user in the bookstore system.
 */
export class User {
  /**
   * The name of the user.
   */
  name: string;

  /**
   * The email address of the user.
   */
  email: string;

  /**
   * The unique ID of the user.
   */
  ID: number;

  /**
   * Creates an instance of User.
   * @param name - The name of the user.
   * @param email - The email address of the user.
   * @param ID - The unique ID of the user.
   */
  constructor(name: string, email: string, ID: number) {
    this.name = name;
    this.email = email;
    this.ID = ID;
  }
}
