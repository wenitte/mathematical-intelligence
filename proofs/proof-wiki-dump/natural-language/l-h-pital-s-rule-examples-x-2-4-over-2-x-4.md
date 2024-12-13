# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule/Examples/x%5E2_-_4_over_2_x_-_4

Example of Use of L'Hôpital's Rule
Let $f: \R \to \R$ and $g: \R \to \R$ be real functions defined as:










\(\ds \forall x \in \R: \, \)



\(\ds \map f x\)

\(=\)







\(\ds x^2 - 4\)




















\(\ds \map g x\)

\(=\)







\(\ds 2 x - 4\)









Then:

$\ds \lim_{x \mathop \to 2} \dfrac {\map f x} {\map g x} = 2$


Proof
We note that $\valueat {\dfrac {\map f x} {\map g x} } {x \mathop = 2}$ is undefined.
Hence we observe that L'Hôpital's Rule may be applicable.

We have that:














\(\ds \map {f'} x\)

\(=\)







\(\ds \dfrac \d {\d x} x^2 - 4\)




















\(\ds \)

\(=\)







\(\ds 2 x\)





Power Rule for Derivatives














\(\ds \map {g'} x\)

\(=\)







\(\ds 2 x - 4\)




















\(\ds \)

\(=\)







\(\ds 2\)





Power Rule for Derivatives




Thus both $\ds \lim_{x \mathop \to 2} \map {f'} 2$ and $\ds \lim_{x \mathop \to 2} \map {g'} 2$ exist, and we can indeed continue:














\(\ds \lim_{x \mathop \to 2} \dfrac {\map f x} {\map g x}\)

\(=\)







\(\ds \lim_{x \mathop \to 2} \dfrac {\map {f'} x} {\map {g'} x}\)





L'Hôpital's Rule














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 2} \dfrac {2 x} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac 4 2\)




















\(\ds \)

\(=\)







\(\ds 2\)









$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): L'Hôpital's rule (L'Hospital's rule, de L'Hôpital's rule)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): L'Hôpital's rule (L'Hospital's rule, de L'Hôpital's rule)




