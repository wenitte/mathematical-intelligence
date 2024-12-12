# 

Source: https://proofwiki.org/wiki/Condition_for_Composite_Relation_with_Inverse_to_be_Identity



Theorem
Let $\RR \subseteq S \times T$ be a relation on $S \times T$.
Let $\RR \circ \RR^{-1}$ be the composite of $\RR$ with its inverse.
Let $I_T$ be the identity mapping on $T$.

Then:

$\RR \circ \RR^{-1} = I_T$
if and only if:

$\RR$ is many-to-one
and:

$\RR$ is right-total.


Proof
Sufficient Condition
Let $\RR \circ \RR^{-1} = I_T$.

Aiming for a contradiction, suppose:

$\exists t \in T: t \notin \Img \RR$
Then:

$t \notin \Img {\RR \circ \RR^{-1} }$
But:

$t \in \Img {I_T}$
by definition of the identity mapping on $T$.
Hence:

$\RR \circ \RR^{-1} \ne I_T$
From this contradiction we deduce that:

$\RR \circ \RR^{-1} = I_T \implies T \setminus \Img \RR = \O$
where $T \setminus \Img \RR$ denotes set difference.
So from Set Difference with Superset is Empty Set‎:

$T \subseteq \Img \RR$
But from Image is Subset of Codomain we have:

$T \supseteq \Img \RR$
and so:

$\Img \RR = T$
which means $\RR$ is right-total.
$\Box$

Suppose $\RR$ is not many-to-one.
Then:

$\exists s \in S: \exists t_1, t_2 \in T, t_1 \ne t_2: \tuple {s, t_1} \in \RR \land \tuple {s, t_2} \in \RR$
By definition of inverse relation:

$\exists s \in S: \exists t_1, t_2 \in T: \tuple {t_1, s} \in \RR^{-1} \land \tuple {t_2, s} \in \RR^{-1}$
The composite of $\RR^{-1}$ and $\RR$ is defined as:

$\RR \circ \RR^{-1} = \set {\tuple {x, z} \in T \times T: \exists y \in S: \tuple {x, y} \in \RR^{-1} \land \tuple {y, z} \in \RR}$

Thus:














\(\ds \tuple {t_1, s}\)

\(\in\)







\(\ds \RR^{-1}\)




















\(\ds \tuple {s, t_2}\)

\(\in\)







\(\ds \RR\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {t_1, t_2}\)

\(\in\)







\(\ds \RR \circ \RR^{-1}\)





where $t_1 \ne t_2$ (from above)



So, by definition of identity mapping:

$\RR \circ \RR^{-1} \ne I_T$
From this contradiction we deduce that $\RR$ must be many-to-one.
$\Box$

So it has been demonstrated that if:

$\RR \circ \RR^{-1} = I_T$
then:

$\RR$ is many-to-one
and

$\RR$ is right-total.
$\Box$


Necessary Condition
Let:

$\RR$ be many-to-one
and

$\RR$ be right-total.

Let $\tuple {t_1, t_2} \in \RR \circ \RR^{-1}$.
The composite of $\RR^{-1}$ and $\RR$ is defined as:

$\RR \circ \RR^{-1} = \set {\tuple {t_1, t_2} \in T \times T: \exists s \in S: \tuple {t_1, s} \in \RR^{-1} \land \tuple {s, t_2} \in \RR}$
By definition of inverse:

$\RR \circ \RR^{-1} = \set {\tuple {t_1, t_2} \in T \times T: \exists s \in S: \tuple {s, t_1} \in \RR \land \tuple {s, t_2} \in \RR}$
But $\RR$ is many-to-one, and so:

$t_1 = t_2$
So:

$\forall \tuple {t_1, t_2} \in \RR \circ \RR^{-1}: t_1 = t_2$
and so:

$\RR \circ \RR^{-1} \subseteq I_T$

Now let $t \in T$.
By definition of identity mapping on $T$:

$\tuple {t, t} \in I_T$
As $\RR$ is right-total:

$\Img \RR = T$
and so:

$\exists s \in S: \tuple {s, t} \in \RR$
and so:

$\exists s \in S: \tuple {t, s} \in \RR^{-1}$
Hence by definition of the composite of $\RR^{-1}$ and $\RR$:

$\tuple {t, t} \in \RR \circ \RR^{-1}$
So:

$\RR \circ \RR^{-1} \supseteq I_T$
and so:

$\RR \circ \RR^{-1} = I_T$
$\Box$

Hence the result.
$\blacksquare$


Examples
Arbitrary Example $1$

In the above we see that:

$\RR$ is many-to-one
$\RR$ is right-total
$\RR \circ \RR^{-1} = I_T$.
Note, however, that $\RR^{-1}$ is neither many-to-one nor right-total, and does not need to be for $\RR \circ \RR^{-1} = I_T$.


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 10$: Inverses and Composites
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 5$: Composites and Inverses of Functions: Exercise $5.8 \ \text{(e)}$




