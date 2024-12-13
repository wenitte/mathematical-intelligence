# 

Source: https://proofwiki.org/wiki/Primitive_of_x_by_Cosine_of_x/Proof_2

Theorem
$\ds \int x \cos x \rd x = \cos x + x \sin x + C$


Proof
With a view to expressing the primitive in the form:

$\ds \int u \frac {\d v} {\d x} \rd x = u v - \int v \frac {\d u} {\d x} \rd x$
let:














\(\ds u\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {\d u} {\d x}\)

\(=\)







\(\ds 1\)





Derivative of Identity Function




and let:














\(\ds \frac {\d v} {\d x}\)

\(=\)







\(\ds \cos x\)














\(\ds \leadsto \ \ \)





\(\ds v\)

\(=\)







\(\ds \sin x\)





Primitive of $\cos x$




Then:














\(\ds \int x \cos x \rd x\)

\(=\)







\(\ds x \sin x - \int \paren {\sin x} \times 1 \rd x + C\)





Integration by Parts














\(\ds \)

\(=\)







\(\ds x \sin x - \int \sin x \rd x + C\)





simplifying














\(\ds \)

\(=\)







\(\ds x \sin x - \paren {-\cos x} + C\)





Primitive of $\sin x$














\(\ds \)

\(=\)







\(\ds \cos x + x \sin x + C\)





rearranging



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): integration by parts
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): integration by parts




