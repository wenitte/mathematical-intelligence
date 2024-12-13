# 

Source: https://proofwiki.org/wiki/Order_of_Finite_p-Group_is_Power_of_p



Theorem
Let $G$ be a finite group.
Let $p$ be a prime number.
Let all elements of $G$ have order a power of $p$.

Then $G$ is a $p$-group.


Proof 1
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


Proof 2
Let every element of $G$ be a $p$-element.
Let $q$ be a prime number which is a divisor of the order $\order G$ of $G$.
By Cauchy's Lemma (Group Theory), there exists an element of $G$ whose order is a divisor of $q$.
But as the order of all elements of $G$ divide $p^n$ it follows that $q = p$.
Thus $G$ is a group whose order is $p^n$ for some $n \in \Z_{>0}$.
$\blacksquare$


Sources
1989: Ephraim J. Borowski and Jonathan M. Borwein: Dictionary of Mathematics ... (previous) ... (next): $p$-group
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): $p$-group




