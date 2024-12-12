# 

Source: https://proofwiki.org/wiki/Commutativity_of_Spectrum_in_Algebra_over_Complex_Numbers

Theorem
Let $A$ be an algebra over $\C$.
Let $x, y \in A$.
Let $\map {\sigma_A} {x y}$ and $\map {\sigma_A} {y x}$ be the spectrum of $x y$ and $y x$ respectively in $A$.

Then:

$\map {\sigma_A} {x y} \cup \set 0 = \map {\sigma_A} {y x} \cup \set 0$


Proof
Let $\map G A$ be the group of units of $A$.
Without loss of generality, by replacing $A$ by its unitization if necessary, that $A$ is unital.
Let $x, y \in A$.
We show that ${\mathbf 1}_A - x y \in \map G A$ if and only if ${\mathbf 1}_A - y x \in \map G A$.
By swapping $x$ and $y$, it suffices to show that if ${\mathbf 1}_A - x y \in \map G A$, then ${\mathbf 1}_A - y x \in \map G A$. 
Specifically, we show that $\paren { {\mathbf 1}_A - y x}^{-1} = 1 + y \paren {{\mathbf 1}_A - x y}^{-1} x$.
We have:














\(\ds \paren { {\mathbf 1}_A - y x} \paren { {\mathbf 1}_A + y \paren { {\mathbf 1}_A - x y}^{-1} x}\)

\(=\)







\(\ds {\mathbf 1}_A - y x + \paren {1 - y x} y \paren { {\mathbf 1}_A - x y}^{-1} x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A - y x + y \paren { {\mathbf 1}_A - x y}^{-1} x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A + y \paren {- {\mathbf 1}_A + \paren { {\mathbf 1}_A - x y}^{-1} - \paren { {\mathbf 1}_A - x y}^{-1} } x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A + y \paren {- {\mathbf 1}_A + \paren { {\mathbf 1}_A - x y} \paren { {\mathbf 1}_A - x y}^{-1} } x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A + y \paren {- {\mathbf 1}_A + {\mathbf 1}_A} x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A\)









and:














\(\ds \paren { {\mathbf 1}_A + y \paren { {\mathbf 1}_A - x y}^{-1} x} \paren { {\mathbf 1}_A - y x}\)

\(=\)







\(\ds {\mathbf 1}_A + y \paren { {\mathbf 1}_A - x y}^{-1} x - y x - y \paren { {\mathbf 1}_A - x y}^{-1} x y x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A + y \paren {\paren { {\mathbf 1}_A - x y}^{-1} - {\mathbf 1}_A - \paren { {\mathbf 1}_A - x y}^{-1} x y} x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A + y \paren { \paren { {\mathbf 1}_A - x y}^{-1} \paren { {\mathbf 1}_A - x y} - {\mathbf 1}_A} x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A + y \paren {- {\mathbf 1}_A + {\mathbf 1}_A} x\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A\)









Hence we have shown that for $x, y \in A$, we have ${\mathbf 1}_A - x y \in \map G A$ if and only if ${\mathbf 1}_A - y x \in \map G A$.
Now fix $x, y \in A$ and take $\lambda \ne 0$.
We have ${\mathbf 1}_A - \paren {\lambda^{-1} x} y \in \map G A$ if and only if ${\mathbf 1}_A - y \paren {\lambda^{-1} x} \in \map G A$. 
That is, $\lambda {\mathbf 1}_A - x y \in \map G A$ if and only if $\lambda {\mathbf 1}_A - y x \in \map G A$ for $\lambda \ne 0$. 
Hence we have $\map {\sigma_A} {x y} \setminus \set 0 = \map {\sigma_A} {y x} \setminus \set 0$.
That is, $\map {\sigma_A} {x y} \cup \set 0 = \map {\sigma_A} {y x} \cup \set 0$. 
$\blacksquare$


Sources
2011: Graham R. Allan and H. Garth Dales: Introduction to Banach Spaces and Algebras ... (previous) ... (next): $4.5$: Proposition $4.16$




