import {
    render, screen
} from "@testing-library/vue"
import { userEvent } from "@testing-library/user-event";

import MainNav from "@/components/MainNav.vue";

describe('MainNav', () => { 
    it("displays company name" , () => {
        render(MainNav);
    })
    describe("when the user logs in", () => {
        it("displays user profile picture", async ()=>{
            render(MainNav);
            
            const profileImage = screen.queryByRole("img",{
                name: /user profile image/i,
            })
            expect(profileImage).not.toBeInTheDocument();

            const loginButton = screen.getByRole("button", {
                name: /Sign in/i
            });
            await userEvent.click(loginButton)
            profileImage = screen.queryByRole("img", {
                name: /user profile image/i,
            })
            expect(profileImage).toBeInTheDocument();
        })
    })
 })


