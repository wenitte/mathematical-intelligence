# 

Source: https://proofwiki.org/wiki/Ordinal_Addition_is_Associative



Theorem
Ordinal addition is associative, i.e.:

$\paren {x + y} + z = x + \paren {y + z}$
holds for all ordinals $x$, $y$ and $z$.


Proof
By Transfinite Induction on $z$.


Basis for the Induction













\(\ds \paren {x + y} + \O\)

\(=\)







\(\ds x + y\)





Definition of Ordinal Addition














\(\ds \)

\(=\)







\(\ds x + \paren {y + \O}\)





Definition of Ordinal Addition



This proves the basis for the induction.
$\Box$


Induction Step
Suppose that:

$x + \paren {y + z} = \paren {x + y} + z$

Then:














\(\ds \paren {\paren {x + y} + z}^+\)

\(=\)







\(\ds \paren {x + \paren {y + z} }^+\)





Equality of Successors








\(\ds \leadsto \ \ \)





\(\ds \paren {x + y} + z^+\)

\(=\)







\(\ds x + \paren {y + z}^+\)





Definition of Ordinal Addition














\(\ds \)

\(=\)







\(\ds x + \paren {y + z^+}\)





Definition of Ordinal Addition



This proves the induction step.
$\Box$


Limit Case
Let $z \in K_{II}$ be a limit ordinal, and suppose that:

$\forall w \in z: x + \paren {y + w} = \paren {x + y} + w$
Then it follows that:














\(\ds \bigcup_{w \mathop \in z} \paren {x + \paren {y + w} }\)

\(=\)







\(\ds \bigcup_{w \mathop \in z} \paren {\paren {x + y} + w}\)





Indexed Union Equality














\(\ds \)

\(=\)







\(\ds \paren {x + y} + z\)





Definition of Ordinal Addition



By the hypothesis, we have that $z \in K_{II}$.
From Limit Ordinals Preserved Under Ordinal Addition, also $y + z \in K_{II}$.
Therefore, by definition of ordinal addition:

$x + \paren {y + z} = \ds \bigcup_{n \mathop \in y + z} \paren {x + n}$

So it is sufficient to prove that:

$\ds \bigcup_{w \mathop \in z} \paren {x + \paren {y + w} } = \bigcup_{n \mathop \in y + z} \paren {x + n}$
Take any $w \in z$. 
Then by Membership is Left Compatible with Ordinal Addition, $y + w < y + z$.
Setting $n = y + w$, we now have that:

$x + \paren {y + w} \le x + n$
By Supremum Inequality for Ordinals, it now follows that:

$\ds \bigcup_{w \mathop \in z} \paren {x + \paren {y + w} } \le \bigcup_{n \mathop \in y + z} \paren {x + n}$

To prove the converse inequality, take any $n \in y + z$.
By definition of ordinal addition, this means:

$n \in \ds \bigcup_{w \mathop \in z} \paren {y + w}$
and so, for some $w \in z$, we have $n \in y + w$.

By Membership is Left Compatible with Ordinal Addition, this yields:

$x + n \in x + \paren {y + w}$
and whence by Supremum Inequality for Ordinals:

$\ds \bigcup_{n \mathop \in y + z} \paren {x + n} \le \bigcup_{w \mathop \in z} \paren {x + \paren {y + w} }$

By definition of set equality:

$\ds \bigcup_{n \mathop \in y + z} \paren {x + n} = \bigcup_{w \mathop \in z} \paren {x + \paren {y + w} }$
This proves the limit case.
$\Box$

Hence the result, by Transfinite Induction.
$\blacksquare$


Also see
Natural Number Addition is Associative/Proof 2


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.12$




