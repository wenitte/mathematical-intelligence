# 

Source: https://proofwiki.org/wiki/Extension_Theorem_for_Total_Orderings



Theorem
Let the following conditions be fulfilled:

$(1):\quad$ Let $\struct {S, \circ, \preceq}$ be a totally ordered commutative semigroup
$(2):\quad$ Let all the elements of $\struct {S, \circ, \preceq}$ be cancellable
$(3):\quad$ Let $\struct {T, \circ}$ be an inverse completion of $\struct {S, \circ}$.

Then:

$(1):\quad$ The relation $\preceq'$ on $T$ satisfying $\forall x_1, x_2, y_1, y_2 \in S: x_1 \circ {y_1}^{-1} \preceq' x_2 \circ {y_2}^{-1} \iff x_1 \circ y_2 \preceq x_2 \circ y_1$ is a well-defined relation
$(2):\quad$ $\preceq'$ is the only total ordering on $T$ compatible with $\circ$
$(3):\quad$ $\preceq'$ is the only total ordering on $T$ that induces the given ordering $\preceq$ on $S$.


Proof
By Inverse Completion is Commutative Semigroup:

every element of $T$ is of the form $x \circ y^{-1}$ where $x, y \in S$.


Proof that Relation is Well-Defined
First we need to show that $\preceq'$ is well-defined.
So we need to show that if $x_1, x_2, y_1, y_2, z_1, z_2, w_1, w_2 \in S$ satisfy:














\(\ds x_1 \circ {y_1}^{-1}\)

\(=\)







\(\ds x_2 \circ {y_2}^{-1}\)




















\(\ds z_1 \circ {w_1}^{-1}\)

\(=\)







\(\ds z_2 \circ {w_2}^{-1}\)




















\(\ds x_1 \circ w_1\)

\(\preceq\)







\(\ds y_1 \circ z_1\)









then:

$x_2 \circ {w_2}^{-1} = y_2 \circ {z_2}^{-1}$

We have:














\(\ds x_1 \circ {y_1}^{-1}\)

\(=\)







\(\ds x_2 \circ {y_2}^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x_1 \circ y_2\)

\(=\)







\(\ds x_2 \circ y_1\)









and:














\(\ds z_1 \circ {w_1}^{-1}\)

\(=\)







\(\ds z_2 \circ {w_2}^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds z_1 \circ w_2\)

\(=\)







\(\ds z_2 \circ w_1\)










So:














\(\ds x_2 \circ w_2 \circ y_1 \circ z_1\)

\(=\)







\(\ds x_1 \circ w_1 \circ y_2 \circ z_2\)




















\(\ds \)

\(\preceq\)







\(\ds y_1 \circ z_1 \circ y_2 \circ z_2\)














\(\ds \leadsto \ \ \)





\(\ds x_2 \circ w_2\)

\(\preceq\)







\(\ds y_2 \circ z_2\)





Strict Ordering Preserved under Product with Cancellable Element




Thus $\preceq'$ is a well-defined relation on $T$.
$\Box$


Proof that Relation is Transitive
To show that $\preceq'$ is transitive:










\(\ds \forall x, y, z, w, u, v \in S: \, \)



\(\ds x \circ y^{-1}\)

\(\preceq'\)







\(\ds z \circ w^{-1}\)




















\(\ds z \circ w^{-1}\)

\(\preceq'\)







\(\ds u \circ v^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x \circ w \circ v\)

\(\preceq\)







\(\ds y \circ z \circ v\)




















\(\ds \)

\(\preceq\)







\(\ds y \circ w \circ u\)














\(\ds \leadsto \ \ \)





\(\ds x \circ v\)

\(\preceq\)







\(\ds y \circ u\)





Strict Ordering Preserved under Product with Cancellable Element








\(\ds \leadsto \ \ \)





\(\ds x \circ y^{-1}\)

\(\preceq'\)







\(\ds u \circ v^{-1}\)










Thus $\preceq'$ is transitive.
$\Box$


Proof that Relation is Total Ordering
To show that $\preceq'$ is a total ordering on $T$ compatible with $\circ$:
Let $z_1, z_2 \in T$.
Then:

$\exists x_1, x_2, y_1, y_2 \in S: z_1 = x_1 \circ y_1^{-1}, z_2 = x_2 \circ y_2^{-1}$
Then:

$z_1 \circ y_1 = x_1$
$z_2 \circ y_2 = x_2$

As $\preceq$ is a total ordering on $S$, either:

$z_1 \circ y_1 \circ y_2 \preceq z_2 \circ y_2 \circ y_1$
or:

$z_2 \circ y_2 \circ y_1 \preceq z_1 \circ y_1 \circ y_2$

Without loss of generality, suppose that:

$z_1 \circ y_1 \circ y_2 \preceq z_2 \circ y_2 \circ y_1$
So:














\(\ds z_1 \circ y_1 \circ y_2\)

\(\preceq\)







\(\ds z_2 \circ y_2 \circ y_1\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_2\)

\(\preceq\)







\(\ds x_2 \circ y_1\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_1^{-1}\)

\(\preceq'\)







\(\ds x_2 \circ y_2^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds z_1\)

\(\preceq'\)







\(\ds z_2\)









and it is seen that $\preceq'$ is a total ordering on $T$.
$\Box$


Proof that Relation is Compatible with Operation
Let $x_1, x_2, y_1, y_2 \in T$ such that $x_1 \preceq' x_2, y_1 \preceq' y_2$.
We need to show that $x_1 \circ y_1 \preceq' x_2 \circ y_2$.
Let:

$x_1 = r_1 \circ s_1^{-1}, x_2 = r_2 \circ s_2^{-1}$
$y_1 = u_1 \circ v_1^{-1}, y_2 = u_2 \circ v_2^{-1}$
We have:














\(\ds x_1\)

\(\preceq'\)







\(\ds x_2\)














\(\ds \leadsto \ \ \)





\(\ds r_1 \circ s_1^{-1}\)

\(\preceq'\)







\(\ds r_2 \circ s_2^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds r_1 \circ s_2\)

\(\preceq\)







\(\ds r_2 \circ s_1\)









and














\(\ds y_1\)

\(\preceq'\)







\(\ds y_2\)














\(\ds \leadsto \ \ \)





\(\ds u_1 \circ v_1^{-1}\)

\(\preceq'\)







\(\ds u_2 \circ v_2^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds u_1 \circ v_2\)

\(\preceq\)







\(\ds u_2 \circ v_1\)










Because of the compatibility of $\preceq$ with $\circ$ on $S$:














\(\ds \paren {r_1 \circ s_2} \circ \paren {u_1 \circ v_2}\)

\(\preceq\)







\(\ds \paren {r_2 \circ s_1} \circ \paren {u_2 \circ v_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {r_1 \circ u_1} \circ \paren {s_2 \circ v_2}\)

\(\preceq'\)







\(\ds \paren {r_2 \circ u_2} \circ \paren {s_1 \circ v_1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {r_1 \circ u_1} \circ \paren {s_1 \circ v_1}^{-1}\)

\(\preceq'\)







\(\ds \paren {r_2 \circ u_2} \circ \paren {s_2 \circ v_2}^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {r_1 \circ s_1^{-1} } \circ \paren {u_1 \circ v_1^{-1} }\)

\(\preceq'\)







\(\ds \paren {r_2 \circ s_2^{-1} } \circ \paren {u_2 \circ v_2^{-1} }\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_1\)

\(\preceq'\)







\(\ds x_2 \circ y_2\)









Thus compatibility is proved.
$\Box$


Proof about Restriction of Relation
To show that the restriction of $\preceq'$ to $S$ is $\preceq$:










\(\ds \forall x, y \in S: \, \)



\(\ds x\)

\(\preceq\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \forall a \in S: \, \)



\(\ds \paren {x \circ a} \circ a\)

\(\preceq\)







\(\ds \paren {y \circ a} \circ a\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \paren {x \circ a} \circ a^{-1}\)




















\(\ds \)

\(\preceq\)







\(\ds \paren {y \circ a} \circ a^{-1}\)




















\(\ds \)

\(=\)







\(\ds y\)










Conversely:










\(\ds \forall x, y \in S: \, \)



\(\ds x\)

\(\preceq'\)







\(\ds y\)














\(\ds \leadsto \ \ \)

\(\ds \exists u, v, z, w \in S: \, \)



\(\ds x\)

\(=\)







\(\ds u \circ v^{-1}\)




















\(\ds y\)

\(=\)







\(\ds z \circ w^{-1}\)




















\(\ds u \circ w\)

\(\preceq\)







\(\ds z \circ v\)














\(\ds \leadsto \ \ \)





\(\ds x \circ v \circ w\)

\(=\)







\(\ds u \circ w\)




















\(\ds \)

\(\preceq\)







\(\ds z \circ v\)




















\(\ds \)

\(=\)







\(\ds y \circ v \circ w\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(\preceq\)







\(\ds y\)





Strict Ordering Preserved under Product with Cancellable Element



$\Box$


Proof that Relation is Unique
To show that $\preceq'$ is unique:
Let $\preceq^*$ be any ordering on $T$ compatible with $\circ$ that induces $\preceq$ on $S$.
Then:










\(\ds \forall x, y, z, w \in S: \, \)



\(\ds x \circ y^{-1}\)

\(\preceq^*\)







\(\ds z \circ w^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ w\)

\(\preceq\)







\(\ds y \circ z\)









Then:














\(\ds x \circ y^{-1}\)

\(\preceq^*\)







\(\ds z \circ w^{-1}\)














\(\ds \leadsto \ \ \)





\(\ds x \circ w\)

\(=\)







\(\ds \paren {x \circ y^{-1} } \circ \paren {y \circ w}\)




















\(\ds \)

\(\preceq\)







\(\ds \paren {z \circ w^{-1} } \circ \paren {y \circ w}\)




















\(\ds \)

\(=\)







\(\ds y \circ z\)
























\(\ds x \circ w\)

\(\preceq\)







\(\ds y \circ z\)














\(\ds \leadsto \ \ \)





\(\ds x \circ y^{-1}\)

\(=\)







\(\ds \paren {x \circ w} \circ w^{-1} \circ y^{-1}\)




















\(\ds \)

\(\preceq^*\)







\(\ds \paren {y \circ z} \circ w^{-1} \circ y^{-1}\)




















\(\ds \)

\(=\)







\(\ds z \circ w^{-1}\)










So:










\(\ds \forall x, y, z, w \in S: \, \)



\(\ds x \circ y^{-1}\)

\(\preceq^*\)







\(\ds z \circ w^{-1}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ w\)

\(\preceq\)







\(\ds y \circ z\)









Hence as every element of $T$ is of the form $x \circ y^{-1}$ where $x, y \in S$, the orderings $\preceq^*$ and $\preceq'$ are identical.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $20$. The Integers: Theorem $20.6$




