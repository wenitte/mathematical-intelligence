# 

Source: https://proofwiki.org/wiki/L%27H%C3%B4pital%27s_Rule/Examples/(Root_(1_%2B_x)_-_1)_over_x

Example of Use of L'Hôpital's Rule
$\ds \lim_{x \mathop \to 0} \dfrac {\sqrt {1 + x} - 1} x = \dfrac 1 2$


Proof
Let $f: \R \to \R$ be defined as:

$\forall x \in \R: \map f x = \sqrt {1 + x} - 1$
Let $g: \R \to \R$ be defined as:

$\forall x \in \R: \map g x = x$

We have that:














\(\ds \map {f'} x\)

\(=\)







\(\ds \dfrac \d {\d x} \sqrt {1 + x} - 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\sqrt {1 + x} }^{-1/2}\)





Power Rule for Derivatives














\(\ds \map {g'} x\)

\(=\)







\(\ds \dfrac \d {\d x} x\)




















\(\ds \)

\(=\)







\(\ds 1\)





Power Rule for Derivatives



Then:














\(\ds \lim_{x \mathop \to 0} \dfrac {\map f x} {\map g x}\)

\(=\)







\(\ds \lim_{x \mathop \to 0} \dfrac {\map {f'} x} {\map {g'} x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \dfrac {\frac 1 2 \paren {\sqrt {1 + x} }^{-1/2} } 1\)




















\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to 0} \frac 1 2 \times 1\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2\)









$\blacksquare$


Sources
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): l'Hôpital's rule
2021: Richard Earl and James Nicholson: The Concise Oxford Dictionary of Mathematics (6th ed.) ... (previous) ... (next): l'Hôpital's rule




