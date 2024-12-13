# 

Source: https://proofwiki.org/wiki/Little_B%C3%A9zout_Theorem



Theorem
Let $\map {P_n} x$ be a polynomial of degree $n$ in $x$.
Let $a$ be a constant.

Then the remainder of $\map {P_n} x$ when divided by $x - a$ is equal to $\map {P_n} a$.


Proof
By the process of Polynomial Long Division, we can express $\map {P_n} x$ as:

$(1): \quad \map {P_n} x = \paren {x - a} \map {Q_{n - 1} } x + R$
where:

$\map {Q_{n - 1} } x$ is a polynomial in $x$ of degree $n - 1$
$R$ is a polynomial in $x$ of degree no greater than $0$; that is, a constant.

It follows that, by setting $x = a$ in $(1)$, we get $\map {P_n} a = R$.
Hence the result.
$\blacksquare$


Also known as
The Little Bézout Theorem is sometimes referred to as the Polynomial Remainder Theorem.
Some sources call it merely the Remainder Theorem, but there is more than one theorem so named. 


Source of Name
This entry was named for Étienne Bézout.


Sources
1960: Margaret M. Gow: A Course in Pure Mathematics ... (previous) ... (next): Chapter $1$: Polynomials; The Remainder and Factor Theorems; Undetermined Coefficients; Partial Fractions: $1.2$. The remainder and factor theorems
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $8$: Field Extensions: $\S 37$. Roots of Polynomials: Theorem $69$
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): remainder theorem: 1.
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): remainder theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): remainder theorem




