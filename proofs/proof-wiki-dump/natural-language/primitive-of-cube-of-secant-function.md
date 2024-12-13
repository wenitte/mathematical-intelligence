# 

Source: https://proofwiki.org/wiki/Primitive_of_Cube_of_Secant_Function

Theorem
$\ds \int \sec^3 x \rd x = \frac 1 2 \paren {\sec x \tan x + \ln \size {\sec x + \tan x} } + C$


Proof 1
From Primitive of $\sec^3 a x$:

$\ds \int \sec^3 a x \rd x = \frac 1 {2 a} \paren {\sec a x \tan a x + \ln \size {\sec a x + \tan a x} } + C$

The result follows on setting $a = 1$.
$\blacksquare$


Proof 2
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds \sec a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds a \sec a x \tan a x\)





Derivative of Function of Constant Multiple, Derivative of $\sec$




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \sec^2 x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \tan x\)





Primitive of $\sec^2 x$




Then:














\(\ds \int \sec^3 x \rd x\)

\(=\)







\(\ds \int \sec x \sec^2 x \rd x\)




















\(\ds \)

\(=\)







\(\ds \sec x \tan x - \int \tan x \paren {\sec x \tan x} \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds \sec x \tan x - \int \tan^2 x \sec x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds \sec x \tan x - \int \paren {\sec^2 x - 1} \sec x \rd x + C\)





Difference of $\sec^2$ and $\tan^2$














\(\ds \)

\(=\)







\(\ds \sec x \tan x - \int \sec^3 x \rd x + \int \sec x \rd x + C\)





Linear Combination of Primitives














\(\ds \)

\(=\)







\(\ds \sec x \tan x - \int \sec^3 x \rd x + \ln \size {\sec x + \tan x} + C\)





Primitive of $\sec x$








\(\ds \leadsto \ \ \)





\(\ds 2 \int \sec^3 a \rd x\)

\(=\)







\(\ds \sec x \tan x + \ln \size {\sec x + \tan x} + C\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds \int \sec^3 a \rd x\)

\(=\)







\(\ds \dfrac 1 2 \paren {\sec x \tan x + \ln \size {\sec a x + \tan a x} } + C\)









$\blacksquare$





