# 

Source: https://proofwiki.org/wiki/Condition_for_Membership_is_Right_Compatible_with_Ordinal_Exponentiation



Theorem
Let $x, y, z$ be ordinals.
Let $z$ be the successor of some ordinal $w$.

Then:

$x < y \iff x^z < y^z$


Proof
Sufficient Condition
Suppose $x < y$.
By Subset is Right Compatible with Ordinal Exponentiation:

$x^w \le y^w$
Then:














\(\ds x^z\)

\(=\)







\(\ds x^w \times x\)





Definition of Ordinal Exponentiation














\(\ds y^z\)

\(=\)







\(\ds y^w \times y\)





Definition of Ordinal Exponentiation














\(\ds x^w \times x\)

\(\le\)







\(\ds y^w \times x\)





Subset is Right Compatible with Ordinal Exponentiation














\(\ds \)

\(<\)







\(\ds y^w \times y\)





Membership is Left Compatible with Ordinal Exponentiation




Thus the sufficient condition is satisfied.
$\Box$


Necessary Condition
Suppose $x^z < y^z$.
From Subset is Right Compatible with Ordinal Exponentiation:

$y \le x \implies y^z \le x^z$

This contradicts:

$x^z < y^z$
so:

$y \nleq x$
By Ordinal Membership is Trichotomy:

$x < y$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.36$




