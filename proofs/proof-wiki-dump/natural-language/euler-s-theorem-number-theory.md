# 

Source: https://proofwiki.org/wiki/Euler%27s_Theorem_(Number_Theory)

This proof is about Euler's Theorem in the context of Number Theory. For other uses, see Euler's Theorem.



Theorem
Let $a, m \in \Z$ be coprime integers: $a \perp m$.
Let $\map \phi m$ be the Euler $\phi$ function of $m$.

Then:

$a^{\map \phi m} \equiv 1 \pmod m$


Corollary
Let $p^n$ be a prime power for some prime number $p > 1$.
Let $a$ be an integer not divisible by $p: p \nmid a$.
Then:

$a^{\paren {p - 1} p^{n - 1} } \equiv 1 \pmod {p^n}$


Proof
Let $\eqclass a m$ denote the residue class modulo $m$ of $a$.
Since $a \perp m$, it follows by Reduced Residue System under Multiplication forms Abelian Group that $\eqclass a m$ belongs to the abelian group $\struct {\Z'_m, \times}$.
Let $k = \order {\eqclass a m}$ where $\order {\, \cdot \,}$ denotes the order of a group element.
By Order of Element Divides Order of Finite Group:

$k \divides \order {\Z'_m}$
By the definition of the Euler $\phi$ function:

$\order {\Z'_m} = \map \phi m$

Thus:














\(\ds \eqclass a m^k\)

\(=\)







\(\ds \eqclass a m\)





Definition of Order of Group Element








\(\ds \leadsto \ \ \)





\(\ds \eqclass a m^{\map \phi m}\)

\(=\)







\(\ds \eqclass {a^{\map \phi m} } m\)





Congruence of Powers














\(\ds \)

\(=\)







\(\ds \eqclass 1 m\)














\(\ds \leadsto \ \ \)





\(\ds a^{\map \phi m}\)

\(\equiv\)







\(\ds 1 \pmod m\)





Definition of Residue Class



$\blacksquare$


Also presented as
Some sources present Euler's Theorem in the form:

$m \divides a^{\map \phi m} - 1$
where $\divides$ denotes divisibility.


Also see
Fermat's Little Theorem


Source of Name
This entry was named for Leonhard Paul Euler.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 42$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 2.3$: Congruences: Exercise $5$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): Euler phi function or totient
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $28$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Euler's theorem: 3.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): phi function (totient function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's phi function (phi function, totient function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Euler's theorem: 3.




