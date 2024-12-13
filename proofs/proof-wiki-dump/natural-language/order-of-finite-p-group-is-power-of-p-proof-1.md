# 

Source: https://proofwiki.org/wiki/Order_of_Finite_p-Group_is_Power_of_p/Proof_1

Theorem
Let $G$ be a finite group.
Let $p$ be a prime number.
Let all elements of $G$ have order a power of $p$.

Then $G$ is a $p$-group.


Proof
Aiming for a contradiction, suppose:

$\order G = k p^n: p \nmid k$
where $\order G$ denotes the order of $G$.
By Divisors of Power of Prime:

$k \nmid p^n$

From the First Sylow Theorem:

$\exists H \le G: \order H = k$
where $H \le G$ denotes that $H$ is a subgroup of $G$.

Thus:

$\exists h \in H: \order h \divides k \implies \order h \nmid p$
where $\divides$ denotes divisibility.
Thus:

$\exists h \in G: \order h \ne p^n: n \in \Z$
Thus by Proof by Contradiction, $\order G$ must be a power of $p$.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $11$: The Sylow Theorems: Definition $11.8$




