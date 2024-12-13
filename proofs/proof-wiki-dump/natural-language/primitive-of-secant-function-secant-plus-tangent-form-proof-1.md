# 

Source: https://proofwiki.org/wiki/Primitive_of_Secant_Function/Secant_plus_Tangent_Form/Proof_1

Theorem
$\ds \int \sec x \rd x = \ln \size {\sec x + \tan x} + C$
where $\sec x + \tan x \ne 0$.


Proof
Let:














\(\ds u\)

\(=\)







\(\ds \tan x + \sec x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds \frac \d {\d x} \tan x + \frac \d {\d x} \sec x\)





Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds \sec^2 x + \frac \d {\d x} \sec x\)





Derivative of Tangent Function














\(\ds \)

\(=\)







\(\ds \sec^2 x + \sec x \tan x\)





Derivative of Secant Function














\(\ds \)

\(=\)







\(\ds \sec x \paren {\sec x + \tan x}\)





factorising




Then:














\(\ds \int \sec x \rd x\)

\(=\)







\(\ds \int \frac {\sec x \paren {\sec x + \tan x} } {\sec x + \tan x} \rd x\)





multiplying top and bottom by $\sec x + \tan x$














\(\ds \)

\(=\)







\(\ds \ln \size {\sec x + \tan x} + C\)





Primitive of Function under its Derivative



$\blacksquare$


Sources
1945: A. Geary, H.V. Lowry and H.A. Hayden: Advanced Mathematics for Technical Students, Part I ... (previous) ... (next): Chapter $\text {III}$: Integration: Integration




