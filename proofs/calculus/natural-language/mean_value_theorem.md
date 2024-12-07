The theorem in question is known as the Mean Value Theorem. It states that for any real-valued function f and any two real numbers a and b such that a is less than b, if the function is continuous over the interval from a to b, and differentiable over the open interval (a, b), then there exists some c in the open interval (a, b) such that the derivative of the function at c is equal to the slope of the line that connects the points (a, f(a)) and (b, f(b)). 

Here's a more informal explanation of the proof:

Let's begin by assuming that we have a continuous, differentiable function f and two real numbers a and b where a is less than b. 

We then construct a new function g(x), which is defined to be f(x) minus the slope of the line from (a, f(a)) to (b, f(b)) times x, plus the value of f(a).

Since g(x) is built from f(x), which is both continuous and differentiable, g(x) inherits those properties and is also continuous and differentiable. We also note that at a and b, g(x) takes the value 0. 

From these properties, we can apply Rolle's theorem, another important concept in calculus. Rolle's theorem states that for any real-valued function that is continuous on a closed interval [a, b], differentiable on the open interval (a, b), and where the function's value at the endpoints of the interval is the same, there exists a point c in the open interval (a, b) where the function's derivative is zero.

Applying this theorem to g(x), gives us a value c in the interval (a, b) where the derivative of g is 0. Taking into account that the derivative of g(x) is f'(x) minus the slope of the line from (a, f(a)) to (b, f(b)), setting it to zero lets us solve for f'(c) to be equal to the slope of the line from (a, f(a)) to (b, f(b)). Thus, we have effectively proven the mean value theorem.