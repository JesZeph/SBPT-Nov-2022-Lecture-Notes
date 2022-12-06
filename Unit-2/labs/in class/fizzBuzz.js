/* 
    - use a loop, conditional, and console.log() to print all the numbers from 1 to 30

    - Numbers evenly divisible by 3, print "Fizz" instead of the number.

    - Number evenly divisible by 5, not 3, print "Buzz" instead of the number

    - Numbers that are evenly divisible by BOTH 3 and 5, print "Fizz Buzz" instead of the number.

    - Any number that is not divisible by either, print the number.


*/

for ( var i =1; i <= 30; i++ )
{
    if ( i%3 === 0 && i%5 === 0 )
    {
    console.log( i + "FizzBuzz" );
    }
    else if ( 1%3 === 0 )
    {
     console.log(i+ "Fizz" );
    }
    else if ( i%5 === 0 )
    {
        console.log(i+ "Buzz" );
    }
    // else if ( 1%3 != 0)
    // {console.log}
    else
    {
        console.log(i);
    }
}