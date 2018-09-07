// import { User } from './../models/user';
// import { reducer } from "./auth.reducer";
// import { AuthActions, AuthApiActions } from '../actions';
// import * as fromAuth from "./auth.reducer";

// describe("AuthReducer", () => {
//     describe("undefined action", () => {
//         it("should return default state", () => {
//             const action = {} as any;

//             const result = reducer(undefined, action);

//             expect(result).toMatchSnapshot();
//         });
//     });

//     describe("LOGIN_SUCCESS", () => {
//         it("should add a user in auth state", () => {
//             const user = { name: "test" } as User;
//             const action = new AuthApiActions.LoginSucess({ user });

//             const expectedResult = {
//                 user: { name: "test" }
//             };

//             const result = reducer(fromAuth.initialState, action);

//             expect(result).toMatchSnapshot();
//         });
//     });
// });
