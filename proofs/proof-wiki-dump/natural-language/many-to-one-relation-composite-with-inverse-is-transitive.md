# 

Source: https://proofwiki.org/wiki/Many-to-One_Relation_Composite_with_Inverse_is_Transitive

Theorem
Let $\RR \subseteq S \times T$ be a relation which is many-to-one.
Then the composites (both ways) of $\RR$ and its inverse $\RR^{-1}$, that is, both $\RR^{-1} \circ \RR$ and $\RR \circ \RR^{-1}$, are transitive.


Proof
Let $\RR \subseteq S \times T$ be many-to-one.
Then, from the definition of many-to-one:

$\RR \subseteq S \times T: \forall x \in S: \tuple {x, y_1} \in \RR \land \tuple {x, y_2} \in \RR \implies y_1 = y_2$
Also, note that from Inverse of Many-to-One Relation is One-to-Many, $\RR^{-1}$ is one-to-many.

Let $\tuple {a, b}, \tuple {b, c} \in \RR^{-1} \circ \RR$.














\(\ds \)

\(\)







\(\ds \tuple {a, b}, \tuple {b, c} \in \RR^{-1} \circ \RR\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \exists p \in T: \tuple {a, p} \in \RR \land \tuple {p, b} \in \RR^{-1}\)


















\(\, \ds \land \, \)

\(\ds \)

\(\)







\(\ds \exists q \in T: \tuple {b, q} \in \RR \land \tuple {q, c} \in \RR^{-1}\)





Definition of Composition of Relations








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \tuple {b, p} \in \RR \land \tuple {p, a} \in \RR^{-1}\)


















\(\, \ds \land \, \)

\(\ds \)

\(\)







\(\ds \tuple {c, q} \in \RR \land \tuple {q, b} \in \RR^{-1}\)





Definition of Inverse Relation








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \tuple {c, p} \in \RR \land \tuple {p, b} \in \RR^{-1}\)





as $\RR$ is many-to-one








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \tuple {a, p} \in \RR \land \tuple {p, c} \in \RR^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \tuple {a, c} \in \RR\)





Definition of Composition of Relations



Thus $\RR^{-1} \circ \RR$ is transitive.

Now let $\tuple {p, q}, \tuple {q, r} \in \RR \circ \RR^{-1}$.














\(\ds \)

\(\)







\(\ds \tuple {p, q}, \tuple {q, r} \in \RR \circ \RR^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \exists a \in S: \tuple {p, a} \in \RR^{-1} \land \tuple {a, q} \in \RR\)


















\(\, \ds \land \, \)

\(\ds \)

\(\)







\(\ds \exists b \in S: \tuple {q, b} \in \RR^{-1} \land \tuple {b, r} \in \RR\)





Definition of Composition of Relations








\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds \tuple {a, p} \in \RR \land \tuple {q, a} \in \RR^{-1}\)


















\(\, \ds \land \, \)

\(\ds \)

\(\)







\(\ds \tuple {b, q} \in \RR \land \tuple {r, b} \in \RR^{-1}\)





Definition of Inverse Relation




But $\RR$ is many-to-one. 
This means that:

$\forall x \in S: \tuple {x, y_1} \in \RR \land \tuple {x, y_2} \in \RR \implies y_1 = y_2$

So:














\(\ds \tuple {a, p} \in \RR \land \tuple {a, q} \in \RR\)

\(\leadsto\)







\(\ds p = q\)





as $\RR$ is many-to-one














\(\ds \tuple {b, q} \in \RR \land \tuple {b, r} \in \RR\)

\(\leadsto\)







\(\ds q = r\)





as $\RR$ is many-to-one














\(\ds \)

\(\leadsto\)







\(\ds p = q = r\)




















\(\ds \)

\(\leadsto\)







\(\ds \tuple {p, r} \in \RR \circ \RR^{-1}\)










Thus (trivially) $\RR \circ \RR^{-1}$ is transitive.
$\blacksquare$





