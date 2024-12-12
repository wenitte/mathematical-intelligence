# 

Source: https://proofwiki.org/wiki/Construction_of_Direct_Product_of_Fields



Theorem
Let $\struct {F, +_F, \times_F}$ be a field whose zero is $0$ and whose multiplicative identity is $1$.
Let $E = F \times F$ be the Cartesian product of $F$ with itself.
Let addition be defined on $E$ by:

$\forall a, b, c, d \in F: \tuple {a, b} +_E \tuple {c, d} := \tuple {a +_F c, b +_F d}$
Let multiplication be defined on $E$ by:

$\forall a, b, c, d \in F: \tuple {a, b} \times_E \tuple {c, d} := \tuple {\paren {a \times_F c} +_F \paren {-\paren {b \times_F d} }, \paren {a \times_F d} +_F \paren {b \times_F c} }$

Then $\struct {E, +_E, \times_E}$ is a field.


Proof
In order to define the structure rigorously, each of the field addition and field multiplication operations were explicitly stated in the above.
However, in order to simplify presentation, the operations will be denoted in the following as:










\(\ds \forall a, b, c, d \in F: \, \)



\(\ds \tuple {a, b} + \tuple {c, d}\)

\(=\)







\(\ds \tuple {a + c, b + d}\)




















\(\ds \tuple {a, b} \tuple {c, d}\)

\(=\)







\(\ds \tuple {a c - b d, a d + b c}\)









when it is clear from the context which operation is implied.

We check the criteria for $E$ to be a field.
First we note that $\struct {E, +_E}$ is the external group direct product $\struct {F, +_F} \times \struct {F, +_F}$, where $\struct {F, +_F}$ is an Abelian group.
Hence from External Direct Product of Abelian Groups is Abelian Group we have that $\struct {E, +_E}$ is an Abelian group whose identity is $\tuple {0, 0}$.

Now we consider the algebraic structure $\tuple {E, \times_E}$.
We specifically wish to demonstrate that $\tuple {E^*, \times_E}$, where $E^* := E \setminus \tuple {0, 0}$, is an Abelian group.

Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
Let $\tuple {a, b}$ and $\tuple {c, d}$ be arbitrary elements of $\tuple {E, \times_E}$.
By definition:

$\tuple {a, b} \times_E \tuple {c, d} := \tuple {\paren {a \times_F c} +_F \paren {-\paren {b \times_F d} }, \paren {a \times_F d} +_F \paren {b \times_F c} }$
Because $\struct {F, +_F}$ is a group, $+_F$ is a closed operation.
Because $\struct {F, \times_F}$ is a group, $\times_F$ is a closed operation.
Hence:

$\paren {a \times_F c} +_F \paren {-\paren {b \times_F d} } \in F$
and:

$\paren {a \times_F d} +_F \paren {b \times_F c} \in F$
That is:

$\tuple {\paren {a \times_F c} +_F \paren {-\paren {b \times_F d} }, \paren {a \times_F d} +_F \paren {b \times_F c} } \in F \times F$
and so by definition:

$\tuple {a, b} \times_E \tuple {c, d} \in E$
Thus $\tuple {a, b} \times_E \tuple {c, d} \in E$ and so $\tuple {E, \times_E}$ is closed.

We specifically note that if $\tuple {a, b} = \tuple {0, 0}$ or $\tuple {c, d} = \tuple {0, 0}$, then:

$\tuple {a, b} \times_E \tuple {c, d} = \tuple {0, 0}$
Suppose that $\tuple {a, b} \tuple {c, d} = \tuple {0, 0}$.
We have:














\(\ds \tuple {a, b} \tuple {c, d}\)

\(=\)







\(\ds \tuple {0, 0}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a c - b d, a d + b c}\)

\(=\)







\(\ds \tuple {0, 0}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a c - b d}\)

\(=\)







\(\ds 0\)


















\(\, \ds \land \, \)

\(\ds \tuple {a d + b c}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a c d - b d^2}\)

\(=\)







\(\ds 0\)





where $d^2 := d d$












\(\, \ds \land \, \)

\(\ds \tuple {a c d + b c^2}\)

\(=\)







\(\ds 0\)





and $c^2 := c c$








\(\ds \leadsto \ \ \)





\(\ds b \paren {c^2 + d^2}\)

\(=\)







\(\ds 0\)









and also:














\(\ds \tuple {a c - b d}\)

\(=\)







\(\ds 0\)


















\(\, \ds \land \, \)

\(\ds \tuple {a d + b c}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {a c^2 - b c d}\)

\(=\)







\(\ds 0\)


















\(\, \ds \land \, \)

\(\ds \tuple {a d^2 + b c d}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds a \paren {c^2 + d^2}\)

\(=\)







\(\ds 0\)









it follows that if either $c \ne 0$ or $d \ne 0$, then $a = b = 0$.
So for $\tuple {a, b} \tuple {c, d} = \tuple {0, 0}$ it must be the case that either $\tuple {a, b} = \tuple {0, 0}$ or $\tuple {c, d} = \tuple {0, 0}$.
Thus it follows that $\tuple {E, \times_E} \setminus \tuple {0, 0}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity









\(\ds \forall a, b, c, d, e, f \in F: \, \)



\(\ds \)

\(\)







\(\ds \paren {\tuple {a, b} \tuple {c, d} } \tuple {e, f}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a c - b d, a d + b c} \tuple {e, f}\)





Definition of $\times_E$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {a c - b d} e - \paren {a d + b c} f, \paren {a c - b d} f + \paren {a d + b c} e}\)





Definition of $\times_E$




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds \tuple {a c e - b d e - a d f - b c f, a c f - b d f + a d e + b c e}\)





$F$ is a field: $\times_F$ distributes over $+_F$














\(\ds \forall a, b, c, d, e, f \in F: \, \)



\(\ds \)

\(\)







\(\ds \tuple {a, b} \paren {\tuple {c, d} \tuple {e, f} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b} \tuple {c e - d f, c f + d e}\)





Definition of $\times_E$














\(\ds \)

\(=\)







\(\ds \tuple {a \paren {c e - d f} - b \paren {c f + d e}, a \paren {c f + d e} + b \paren {c e - d f} }\)





Definition of $\times_E$




\(\text {(2)}: \quad\)









\(\ds \)

\(=\)







\(\ds \tuple {a c e - a d f - b c f - b d e, a c f + a d e + b c e - b d f}\)





$F$ is a field: $\times_F$ distributes over $+_F$




Because $\struct {F, +_F}$ is an Abelian group, $+_F$ is a commutative operation.
Thus from $(1)$ and $(2)$:

$\paren {\tuple {a, b} \tuple {c, d} } \tuple {e, f} = \tuple {a, b} \paren {\tuple {c, d} \tuple {e, f} }$

Thus $\times_E$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
In order for $\tuple {E^*, \times_E}$ to be a group, it must have an identity element
With that in mind, let $\tuple {x, y} \in E$ such that:

$\forall \tuple {a, b} \in E: \tuple {x, y} \tuple {a, b} = \tuple {a, b} = \tuple {a, b} \tuple {x, y}$

We have:










\(\ds \forall a, b \in F: \, \)



\(\ds \tuple {x, y} \tuple {a, b}\)

\(=\)







\(\ds \tuple {a, b}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x a - y b, x b + y a}\)

\(=\)







\(\ds \tuple {a, b}\)














\(\ds \leadsto \ \ \)





\(\ds x a - y b\)

\(=\)







\(\ds a\)





Equality of Ordered Tuples












\(\, \ds \land \, \)

\(\ds x b + y a\)

\(=\)







\(\ds b\)














\(\ds \leadsto \ \ \)





\(\ds x a b - y b b\)

\(=\)







\(\ds a b\)





$F$ is a field: $\times_F$ distributes over $+_F$












\(\, \ds \land \, \)

\(\ds x a b + y a a\)

\(=\)







\(\ds a b\)














\(\ds \leadsto \ \ \)





\(\ds 2 x a b\)

\(=\)







\(\ds 2 a b\)


















\(\, \ds \land \, \)

\(\ds y \paren {a a - b b}\)

\(=\)







\(\ds 0\)










Because $F$ is a field, this means that:

$x$ is the multiplicative identity of $F$
$y$ is the zero of $F$.

That is:

$\tuple {x, y} = \tuple {1, 0}$

It suffices to check that:










\(\ds \forall a, b \in F: \, \)



\(\ds \tuple {a, b} \tuple {1, 0}\)

\(=\)







\(\ds \tuple {a 1 - b 0, a 0 + b 1}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b}\)










Thus it has been shown that $\tuple {1, 0}$ is the identity element of $\tuple {E, \times_E}$.
Hence, directly, $\tuple {1, 0}$ is the identity element of $\tuple {E^*, \times_E}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $\tuple {1, 0}$ is the identity element of $\tuple {E^*, \times_E}$.
We investigate the conditions under which, for any given $\tuple {a, b} \in E$, there exists $\tuple {x, y} \in E$ such that:

$\tuple {x, y} \tuple {a, b} = \tuple {1, 0}$
Hence:














\(\ds \tuple {x, y} \tuple {a, b}\)

\(=\)







\(\ds \tuple {1, 0}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x a - y b, x b + y a}\)

\(=\)







\(\ds \tuple {1, 0}\)





Definition of $+_E$








\(\ds \leadsto \ \ \)





\(\ds x a - y b\)

\(=\)







\(\ds 1\)














\(\ds \land \ \ \)





\(\ds x b + y a\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x a b - y b^2\)

\(=\)







\(\ds b\)





where $b^2 := b b$








\(\ds \land \ \ \)





\(\ds x a b + y a^2\)

\(=\)







\(\ds 0\)





and $a^2 := a a$








\(\ds \leadsto \ \ \)





\(\ds y \paren {a^2 + b^2}\)

\(=\)







\(\ds -b\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {-b} {a^2 + b^2}\)














\(\ds \leadsto \ \ \)





\(\ds x a - \dfrac {-b} {a^2 + b^2} b\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds x a\)

\(=\)







\(\ds \dfrac {-b^2} {a^2 + b^2} + 1\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-b^2 + a^2 + b^2} {a^2 + b^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a^2} {a^2 + b^2}\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac a {a^2 + b^2}\)














\(\ds \leadsto \ \ \)





\(\ds \tuple {x, y}\)

\(=\)







\(\ds \paren {\dfrac a {a^2 + b^2}, \dfrac {-b} {a^2 + b^2} }\)









Hence, for $\tuple {x, y}$ to be the multiplicative inverse of $\tuple {a, b}$, it is necessary and sufficient that:

$\tuple {x, y} = \paren {\dfrac a {a^2 + b^2}, \dfrac {-b} {a^2 + b^2} }$
This can happen when:

$a^2 + b^2 \ne 0$
that is, when:

$\tuple {a, b} \ne \tuple {0, 0}$
So:

$\forall \tuple {a, b} \in E \setminus \tuple {0, 0}: \tuple {a, b}^{-1} = \paren {\dfrac a {a^2 + b^2}, \dfrac {-b} {a^2 + b^2} }$

Thus every element $\tuple {a, b}$ of $\tuple {E, \times_E} \setminus \tuple {0, 0}$ has an inverse $\paren {\dfrac a {a^2 + b^2}, \dfrac {-b} {a^2 + b^2} }$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\tuple {E, \times_E}$ is a group.


Commutativity
It is sufficient to observe that:










\(\ds \forall a, b, c, d \in F: \, \)



\(\ds \tuple {a, b} \tuple {c, d}\)

\(=\)







\(\ds \tuple {a c - b d, a d + b c}\)





Definition of $\times_E$














\(\ds \)

\(=\)







\(\ds \tuple {c a - d b, c b + d a}\)





$\struct {F, +_F, \times_F}$ is a field














\(\ds \)

\(=\)







\(\ds \tuple {c, d} \tuple {a, b}\)









and it is seen that $\times_E$ is a commutative operation.
$\Box$


Distributivity
It remains to be shown that $\times_E$ is distributive over $+_E$.










\(\ds \forall a, b, c, d, e, f \in F: \, \)



\(\ds \)

\(\)







\(\ds \tuple {a, b} \paren {\tuple {c, d} + \tuple {e, f} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {a, b} \tuple {c + e, d + f}\)





Definition of $+_E$














\(\ds \)

\(=\)







\(\ds \tuple {a \paren {c + e} - b \paren {d + f}, a \paren {d + f} + b \paren {c + e} }\)





Definition of $\times_E$














\(\ds \)

\(=\)







\(\ds \tuple {a c + a e - b d - b f, a d + a f + b c + b e}\)





$F$ is a field: $\times_F$ distributes over $+_F$














\(\ds \)

\(=\)







\(\ds \tuple {\paren {a c - b d} + \paren {a e - b f}, \paren {a d + b c} + \paren {a f + b e} }\)




















\(\ds \)

\(=\)







\(\ds \tuple {a c - b d, a d + b c} + \tuple {a e - b f, a f + b e}\)





Definition of $+_E$














\(\ds \)

\(=\)







\(\ds \tuple {a, b} \tuple {c, d} + \tuple {a, b} \tuple {e, f}\)





Definition of $\times_E$




Thus it has been demonstrated that $\times_E$ is distributive over $+_E$.
$\Box$

All the criteria have been checked, and it follows that $\tuple {E, +_E, \times_E}$ is a field.
$\blacksquare$



This article needs proofreading.In particular: The question as it is posed in Clark is, that given the rules of composition, "determine conditions on $F$ under which $E$ (with these operations) is a field." But I can identify no conditions on $F$ beyond the fact that it is indeed a field such that $E$ is not a field. Is there something I'm missing here? Trouble is I can't ask on StackExchange at the moment because I'm barred for being rude.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $3$: Field Theory: Definition and Examples of Field Structure: $\S 87 \zeta$




