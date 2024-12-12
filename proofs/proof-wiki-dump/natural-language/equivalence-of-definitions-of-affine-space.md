# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Affine_Space


This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.


Theorem
The following definitions of the concept of Affine Space are equivalent:

Associativity Axioms
Let $K$ be a field.
Let $\struct {V, +_V, \circ}$ be a vector space over $K$.
Let $\EE$ be a set on which two mappings are defined:

$+ : \EE \times V \to \EE$
$- : \EE \times \EE \to V$
satisfying the following associativity conditions:




\((\text A 1)\)  

$:$  





  \(\ds \forall p, q \in \EE:\)

\(\ds p + \paren {q - p} = q \)   







  


\((\text A 2)\)  

$:$  





  \(\ds \forall p \in \EE: \forall u, v \in V:\)

\(\ds \paren {p + u} + v = p + \paren {u +_V v} \)   







  


\((\text A 3)\)  

$:$  





  \(\ds \forall p, q \in \EE: \forall u \in V:\)

\(\ds \paren {p - q} +_V u = \paren {p + u} - q \)   







  


Then the ordered triple $\struct {\EE, +, -}$ is an affine space.


Group Action
Let $K$ be a field.
Let $\struct {V, +_V, \circ}$ be a vector space over $K$.
Let $\EE$ be a set.
Let $\phi: \EE \times V \to \EE$ be a free and transitive group action of $\struct {V, +_V}$ on $\EE$.

Then the ordered pair $\struct {\EE, \phi}$ is an affine space.


Weyl's Axioms
Let $K$ be a field.
Let $\struct{V, +_V, \circ}$ be a vector space over $K$.
Let $\EE$ be a set on which a mapping is defined:

$- : \EE \times \EE \to V$
satisfying the following associativity conditions:




\((\text W 1)\)  

$:$  





  \(\ds \forall p \in \EE: \forall v \in V: \exists ! q \in \EE:\)

\(\ds v = q - p \)   







  


\((\text W 2)\)  

$:$  





  \(\ds \forall p, q, r \in \EE:\)

\(\ds \paren{r - q} +_V \paren{q - p} = r - p \)   







  


Then the ordered pair $\tuple {\EE, -}$ is an affine space.


Proof
Associativity Axioms implies Weyl's Axioms
Assume the axioms $(A1)$, $(A2)$, $(A3)$.
Then for any $p, q \in \EE$ we have:














\(\ds q - p\)

\(=\)







\(\ds \paren {p + \paren {q - p} } - p\)





$(A1)$














\(\ds \)

\(=\)







\(\ds \paren {p - p} +_V \paren {q - p}\)





$(A3)$



Therefore by Identity is Unique applied to the vector space $V$ we have:




\((A4)\)  

$:$  





  \(\ds \forall p \in \EE:\)

\(\ds p - p = 0 \)   







  


Now let $p \in \EE$, $v \in V$ as in $(W1)$.
We must show there exists a unique $q \in \EE$ such that:

$v = q - p$
Let:

$q = p + v$
Then:














\(\ds q - p\)

\(=\)







\(\ds \paren {p + v} - p\)





Definition of $q$














\(\ds \)

\(=\)







\(\ds \paren {p - p} +_V v\)





$(A3)$














\(\ds \)

\(=\)







\(\ds v\)





$(A4)$



Now let $r \in \EE$ be arbitrary such that:

$v = r - p$
Then:














\(\ds q\)

\(=\)







\(\ds p + v\)





Definition of $q$














\(\ds \)

\(=\)







\(\ds p + \paren {r - p}\)





Definition of $r$














\(\ds \)

\(=\)







\(\ds r\)





$(A1)$



This shows that $q$ is unique and establishes $(W1)$.

Now let:

$p, q, r \in \EE$
as in $(W2)$.
Then:














\(\ds r - p\)

\(=\)







\(\ds \paren {q + \paren {r - q} } - p\)





$(A1)$














\(\ds \)

\(=\)







\(\ds \paren {q - p} +_V \paren {r - q}\)





$(A3)$



This establishes $(W2)$.


Weyl's Axioms implies Group Action
Assume the axioms $(W1)$, $(W2)$.
Let $\phi: \EE \times V \to \EE$ be the group action defined by:

$\forall \tuple {p, v} \in \EE \times V: p + v := \map \phi {p, v} = q$
where $q \in \EE$ is the unique point such that:

$v = q - p$
given by $(W1)$.
We must verify:




\((RGA1)\)  

$:$  





  \(\ds \forall u, v \in V, p \in \EE:\)

\(\ds \paren {p + u} + v = p + \paren {u +_V v} \)   







  


\((RGA2)\)  

$:$  





  \(\ds \forall p \in \EE:\)

\(\ds p + 0_V = p \)   







  

To establish $(RGA1)$ let $p \in \EE$ and $u, v \in V$.
Then by $(W1)$:




\(\text {(1)}: \quad\)





\(\ds \exists ! q \in \EE: \, \)



\(\ds q - p\)

\(=\)







\(\ds u\)










\(\text {(2)}: \quad\)





\(\ds \exists ! r \in \EE: \, \)



\(\ds r - q\)

\(=\)







\(\ds v\)










\(\text {(3)}: \quad\)





\(\ds \exists ! s \in \EE: \, \)



\(\ds s - p\)

\(=\)







\(\ds u +_V v\)









Then we have:














\(\ds s - q\)

\(=\)







\(\ds \paren {s - q} +_V u -_V u\)




















\(\ds \)

\(=\)







\(\ds \paren {s - q} +_V \paren {q - p} -_V u\)





$(1)$














\(\ds \)

\(=\)







\(\ds \paren {s - p} -_V u\)





$(W2)$














\(\ds \)

\(=\)







\(\ds u +_V v -_V u\)





$(3)$














\(\ds \)

\(=\)







\(\ds v\)




















\(\ds \)

\(=\)







\(\ds r - q\)





$(2)$



Therefore by uniqueness in $(W1)$ we must have:

$r = s$
Therefore:














\(\ds p + \paren {u +_V v}\)

\(=\)







\(\ds s\)





$(3)$














\(\ds \)

\(=\)







\(\ds r\)




















\(\ds \)

\(=\)







\(\ds q + v\)





$(2)$














\(\ds \)

\(=\)







\(\ds \paren {p + u} + v\)





$(1)$



Now to establish $(RGA2)$ let $p \in \EE$ and choose any other point $q \in \EE$.
Then by $(W2)$:

$q - p = \paren {q - p} +_V \paren {p - p}$
So:

$\paren {p - p} = 0_V$
or:

$p + 0_V = p$
which establishes $(RGA2)$.

Next we must show that the action is free, that is:

$\forall v \in V: \forall p \in \EE: p + v = p \implies v = 0_V$
Let $v \in V$ be any vector such that:

$p + v = p$
that is:

$p - p = v$
We have shown for $(RGA2)$ that:

$p - p = 0_V$
and $-$ is a mapping which associates to any $p, q \in \EE$ a unique point in $q - p \in V$.
It follows that:

$v = 0_V$
i.e. the action $+$ is free.

Finally we show that the action is transitive, that is:

$\forall p, q \in \EE: \exists v \in V: p + v = q$
For any $p, q \in \EE$ we let:

$v = q - p$
By the definition of the action $+$ this means that $p + v = q$, which shows that the action is transitive.


Group Action implies Associativity Axioms
Let $\phi: \EE \times V \to \EE$ be a free and transitive group action of $\struct {V, +_V}$ on $\EE$.
For $\tuple {p, v} \in \EE \times V$ write $p + v = \map \phi {p, v}$.
For any points $p, q \in \EE$, by the definition of a transitive group action there exists $v \in V$ such that:

$p + v = q$
Now let us show that the vector $v$ with this property is unique.
If:

$p + v_1 = p + v_2$
then:














\(\ds p + \paren {v_1 - v_2}\)

\(=\)







\(\ds \paren {p + v_1} + \paren {- v_2}\)





$(RGA1)$














\(\ds \)

\(=\)







\(\ds \paren {p + v_2} + \paren {- v_2}\)





by hypothesis














\(\ds \)

\(=\)







\(\ds p + \paren {v_2 - v_2}\)





$(RGA1)$














\(\ds \)

\(=\)







\(\ds p + 0_V\)





$(1)$














\(\ds \)

\(=\)







\(\ds p\)





$(RGA2)$



Now by the definition of a free group action $p + \paren {v_1 - v_2} = 0$ implies that $v_1 - v_2 = 0$.
That is:

$v_1 = v_2$
which shows that there is a unique vector $v$ such that:

$p + v = q$
Therefore we can define a mapping:

$- : \EE \times \EE \to V$
that associates to $\tuple {p, q} \in \EE \times \EE$ the unique vector: 

$v = q - p \in V$
such that:

$p + v = q$
Now that the mappings $+$ and $-$ are defined, we verify $(A1)$, $(A2)$ and $(A3)$.
First:














\(\ds q - p\)

\(=\)







\(\ds v\)














\(\ds \leadstoandfrom \ \ \)





\(\ds p + v\)

\(=\)







\(\ds q\)





By definition








\(\ds \leadstoandfrom \ \ \)





\(\ds p + \paren {q - p}\)

\(=\)







\(\ds q\)





By definition



This establishes $(A1)$.
Now $(A2)$ is:

$p + \paren {u + v} = \paren {p + u} + v$
But this is simply the statement $(RGA1)$ of a group action.
Finally for $(A3)$, let $p, q \in \EE$ and $v \in V$.
Then:














\(\ds \paren {p + u} - q\)

\(=\)







\(\ds \paren {\paren {q + \paren {p - q} } + u} - q\)





$(A1)$














\(\ds \)

\(=\)







\(\ds \paren {q + \paren {\paren {p - q} + u} } - q\)





$(RGA1)$














\(\ds \)

\(=\)







\(\ds \paren {p - q} + u\)





$(A1)$



$\blacksquare$





