# 

Source: https://proofwiki.org/wiki/Reverse_Triangle_Inequality/Real_and_Complex_Fields/Corollary_1



Theorem
Let $x$ and $y$ be elements of either the real numbers $\R$ or the complex numbers $\C$.
Then:

$\size {x - y} \ge \size x - \size y$
where $\size x$ denotes either the absolute value of a real number or the complex modulus of a complex number.


Proof 1
From the Reverse Triangle Inequality:

$\cmod {x - y} \ge \cmod {\cmod x - \cmod y}$
By the definition of both absolute value and complex modulus:

$\cmod {\cmod x - \cmod y} \ge 0$
As:

$\cmod x - \cmod y = \pm \cmod {\cmod x - \cmod y}$
it follows that:

$\cmod {\cmod x - \cmod y} \ge \cmod x - \cmod y$
Hence the result.
$\blacksquare$


Proof 2
By the Triangle Inequality:

$\cmod {x + y} - \cmod y \le \cmod x$
Let $z = x + y$.
Then $x = z - y$ and so:

$\cmod z - \cmod y \le \cmod {z - y}$
Renaming variables as appropriate gives:

$\cmod {x - y} \ge \cmod x - \cmod y$
$\blacksquare$


Proof 3
Let $z_1$ and $z_2$ be represented by the points $A$ and $B$ respectively in the complex plane.
From Geometrical Interpretation of Complex Subtraction, we can construct the parallelogram $OACB$ where:

$OA$ and $OB$ represent $z_1$ and $z_2$ respectively
$BA$ represents $z_1 - z_2$.




But $OA$, $OB$ and $BA$ form the sides of a triangle.
The result then follows directly from Sum of Two Sides of Triangle Greater than Third Side.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Absolute Value: $4$




