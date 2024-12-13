# 

Source: https://proofwiki.org/wiki/Group_does_not_Necessarily_have_Subgroup_of_Order_of_Divisor_of_its_Order



Theorem
Let $G$ be a finite group whose order is $n$.
Let $d$ be a divisor of $n$.

Then it is not necessarily the case that $G$ has a subgroup of order $d$.


Proof 1
Proof by Counterexample:
Consider $S_5$, the symmetric group on $5$ letters.
By Order of Symmetric Group, $\order {S_5} = 5! = 120$.
We have that $120 = 8 \times 15$ and so $15$ is a divisor of $120$.
However, Symmetric Group on 5 Letters has no Subgroup of Order 15.
$\blacksquare$


Proof 2
Proof by Counterexample:
Consider the symmetric group $S_4$.
Then the order of the alternating group $A_4$ is $12$.

We list the subgroups of $A_4$:
The subsets of $A_4$ which form subgroups of $A_4$ are as follows:

Trivial:














\(\ds \)

\(\)







\(\ds \set e\)





Trivial Subgroup is Subgroup














\(\ds \)

\(\)







\(\ds A_4\)





Group is Subgroup of Itself




Order $2$ subgroups:














\(\ds \)

\(\)







\(\ds \set {e, t}\)





as $t^2 = e$














\(\ds \)

\(\)







\(\ds \set {e, u}\)





as $u^2 = e$














\(\ds \)

\(\)







\(\ds \set {e, v}\)





as $v^2 = e$




Order $3$ subgroups:














\(\ds \)

\(\)







\(\ds \set {e, a, p}\)





as $a^2 = p$, $a^3 = a p = e$














\(\ds \)

\(\)







\(\ds \set {e, b, s}\)





as $b^2 = s$, $b^3 = b s = e$














\(\ds \)

\(\)







\(\ds \set {e, c, q}\)





as $c^2 = q$, $c^3 = c q = e$














\(\ds \)

\(\)







\(\ds \set {e, d, r}\)





as $d^2 = r$, $d^3 = d r = e$




Order $4$ subgroup:














\(\ds \)

\(\)







\(\ds \set {e, t, u, v}\)





Klein $4$-Group




Now $6$ divides $12$.
But there is no subgroup of $A_4$ of order $6$.
$\blacksquare$


Also see
Lagrange's Theorem (Group Theory)


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $1$: Introduction to Finite Group Theory: $1.5$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Lagrange's theorem: 2.
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Lagrange's theorem: 2.




