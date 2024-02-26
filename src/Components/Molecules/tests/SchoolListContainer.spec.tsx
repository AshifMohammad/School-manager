
import SchoolListContainer from "../SchoolListContainer";
import {render,screen } from '@testing-library/react'



describe('<SchoolManagerContainer/> Test: Whether or not the container contains the <SchoolListContainer/> and <SchoolViewer/>',()=>{

    beforeEach(()=>{
        render(<SchoolListContainer  />)
    })

    // Verify the building blocks are available 
    test('Verify whether main <SchoolListContainer/> loaded without error',()=>{
       expect(screen.getByTestId('school-list-container')).toBeVisible()
    })

    test('Verify whether main <SchoolListContainer/> loaded without error',()=>{
       expect(screen.getByText('School list')).toBeVisible()
    })


})