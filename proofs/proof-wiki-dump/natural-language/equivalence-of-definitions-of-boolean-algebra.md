# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Boolean_Algebra



Theorem
The following definitions of the concept of Boolean Algebra are equivalent:

Definition 1



\((\text {BA}_1 0)\)  

$:$  













$S$ is closed under $\vee$, $\wedge$ and $\neg$   

  


\((\text {BA}_1 1)\)  

$:$  













Both $\vee$ and $\wedge$ are commutative   

  


\((\text {BA}_1 2)\)  

$:$  













Both $\vee$ and $\wedge$ distribute over the other   

  


\((\text {BA}_1 3)\)  

$:$  













Both $\vee$ and $\wedge$ have identities $\bot$ and $\top$ respectively   

  


\((\text {BA}_1 4)\)  

$:$  













$\forall a \in S: a \vee \neg a = \top, a \wedge \neg a = \bot$   

  

Definition 2



\((\text {BA}_2 0)\)  

$:$  



Closure:   

  \(\ds \forall a, b \in S:\)

\(\ds a \vee b \in S \)   







  












\(\ds a \wedge b \in S \)   







  












\(\ds \neg a \in S \)   







  


\((\text {BA}_2 1)\)  

$:$  



Commutativity:   

  \(\ds \forall a, b \in S:\)

\(\ds a \vee b = b \vee a \)   







  












\(\ds a \wedge b = b \wedge a \)   







  


\((\text {BA}_2 2)\)  

$:$  



Associativity:   

  \(\ds \forall a, b, c \in S:\)

\(\ds a \vee \paren {b \vee c} = \paren {a \vee b} \vee c \)   







  












\(\ds a \wedge \paren {b \wedge c} = \paren {a \wedge b} \wedge c \)   







  


\((\text {BA}_2 3)\)  

$:$  



Absorption Laws:   

  \(\ds \forall a, b \in S:\)

\(\ds \paren {a \wedge b} \vee b = b \)   







  












\(\ds \paren {a \vee b} \wedge b = b \)   







  


\((\text {BA}_2 4)\)  

$:$  



Distributivity:   

  \(\ds \forall a, b, c \in S:\)

\(\ds a \wedge \paren {b \vee c} = \paren {a \wedge b} \vee \paren {a \wedge c} \)   







  












\(\ds a \vee \paren {b \wedge c} = \paren {a \vee b} \wedge \paren {a \vee c} \)   







  


\((\text {BA}_2 5)\)  

$:$  



Identity Elements:   

  \(\ds \forall a, b \in S:\)

\(\ds \paren {a \wedge \neg a} \vee b = b \)   







  












\(\ds \paren {a \vee \neg a} \wedge b = b \)   







  



Proof
Definition 1 implies Definition 2
Let $\struct {S, \vee, \wedge, \neg}$ be an algebraic system which satisfies the criteria of Definition 1.


Boolean Algebra Axiom $(\text {BA}_2 0)$: Closure

From Boolean Algebra Axiom $(\text {BA}_1 0)$: Closure, we have that $S$ is closed under $\vee$, $\wedge$ and $\neg$.
That is:










\(\ds \forall a, b \in S: \, \)



\(\ds a \vee b\)

\(\in\)







\(\ds S\)




















\(\ds a \wedge b\)

\(\in\)







\(\ds S\)




















\(\ds \neg a\)

\(\in\)







\(\ds S\)









$\Box$


Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity

From Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity, we have that $\vee$ and $\wedge$ are commutative on $S$.
That is:










\(\ds \forall a, b \in S: \, \)



\(\ds a \vee b\)

\(=\)







\(\ds b \vee a\)




















\(\ds a \wedge b\)

\(=\)







\(\ds b \wedge a\)









$\Box$


Boolean Algebra Axiom $(\text {BA}_2 2)$: Associativity

From Operations of Boolean Algebra are Associative:










\(\ds \forall a, b, c \in S: \, \)



\(\ds a \vee \paren {b \vee c}\)

\(=\)







\(\ds \paren {a \vee b} \vee c\)




















\(\ds a \wedge \paren {b \wedge c}\)

\(=\)







\(\ds \paren {a \wedge b} \wedge c\)









$\Box$


Boolean Algebra Axiom $(\text {BA}_2 3)$: Absorption Laws

From Absorption Laws (Boolean Algebras):










\(\ds \forall a, b \in S: \, \)



\(\ds a\)

\(=\)







\(\ds a \vee \paren {a \wedge b}\)




















\(\ds a\)

\(=\)







\(\ds a \wedge \paren {a \vee b}\)










The specific format in which these results are expressed in Boolean Algebra Axiom $(\text {BA}_2 3)$: Absorption Laws follow from Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity: $\vee$ and $\wedge$ are commutative on $S$.
$\Box$


Boolean Algebra Axiom $(\text {BA}_2 4)$: Distributivity

From Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity, we have that both $\vee$ and $\wedge$ distribute over the other.
Hence:










\(\ds \forall a, b, c \in S: \, \)



\(\ds a \wedge \paren {b \vee c}\)

\(=\)







\(\ds \paren {a \wedge b} \vee \paren {a \wedge c}\)




















\(\ds a \vee \paren {b \wedge c}\)

\(=\)







\(\ds \paren {a \vee b} \wedge \paren {a \vee c}\)









$\Box$


Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements

We have:














\(\ds \paren {a \wedge \neg a} \vee b\)

\(=\)







\(\ds \bot \vee b\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements














\(\ds \)

\(=\)







\(\ds b\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements


















\(\ds \paren {a \vee \neg a} \wedge b\)

\(=\)







\(\ds \top \wedge b\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements














\(\ds \)

\(=\)







\(\ds b\)





Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements




All axioms are fulfilled.
$\Box$


Definition 2 implies Definition 1
Let $\struct {S, \vee, \wedge, \neg}$ be an algebraic system which satisfies the criteria of Definition 2.


Boolean Algebra Axiom $(\text {BA}_1 0)$: Closure

From Boolean Algebra Axiom $(\text {BA}_2 0)$: Closure:










\(\ds \forall a, b \in S: \, \)



\(\ds a \vee b\)

\(\in\)







\(\ds S\)




















\(\ds a \wedge b\)

\(\in\)







\(\ds S\)




















\(\ds \neg a\)

\(\in\)







\(\ds S\)










That is, $S$ is closed under $\vee$, $\wedge$ and $\neg$.
$\Box$


Boolean Algebra Axiom $(\text {BA}_1 1)$: Commutativity

From Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity:










\(\ds \forall a, b \in S: \, \)



\(\ds a \vee b\)

\(=\)







\(\ds b \vee a\)




















\(\ds a \wedge b\)

\(=\)







\(\ds b \wedge a\)









That is, $\vee$ and $\wedge$ are commutative on $S$.
$\Box$


Boolean Algebra Axiom $(\text {BA}_1 2)$: Distributivity

From Boolean Algebra Axiom $(\text {BA}_2 4)$: Distributivity:










\(\ds \forall a, b, c \in S: \, \)



\(\ds a \wedge \paren {b \vee c}\)

\(=\)







\(\ds \paren {a \wedge b} \vee \paren {a \wedge c}\)




















\(\ds a \vee \paren {b \wedge c}\)

\(=\)







\(\ds \paren {a \vee b} \wedge \paren {a \vee c}\)










From Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity, we have that $\vee$ and $\wedge$ are commutative on $S$, and so:










\(\ds \forall a, b, c \in S: \, \)



\(\ds \paren {a \vee b} \wedge c\)

\(=\)







\(\ds \paren {a \wedge c} \vee \paren {b \wedge c}\)




















\(\ds \paren {a \wedge b} \vee c\)

\(=\)







\(\ds \paren {a \vee c} \wedge \paren {b \vee c}\)









That is, both $\vee$ and $\wedge$ distribute over the other.
$\Box$


Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements

From Meet with Complement is Bottom:

$\exists \bot \in S: \forall a \in S: a \wedge \neg a = \bot$
From Join with Complement is Top:

$\exists \top \in S: \forall a \in S: a \vee \neg a = \top$
These elements $\bot$ and $\top$ are the only elements of $S$ which have these properties.
$\Box$


Boolean Algebra Axiom $(\text {BA}_1 3)$: Identity Elements

We have demonstrated Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements above.
Then:










\(\ds \forall a, b \in S: \, \)



\(\ds \bot \vee b\)

\(=\)







\(\ds \paren {a \wedge \neg a} \vee b\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements














\(\ds \)

\(=\)







\(\ds b\)





Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements












\(\ds \forall a, b \in S: \, \)



\(\ds \top \wedge b\)

\(=\)







\(\ds \paren {a \vee \neg a} \wedge b\)





Boolean Algebra Axiom $(\text {BA}_1 4)$: Complements














\(\ds \)

\(=\)







\(\ds b\)





Boolean Algebra Axiom $(\text {BA}_2 5)$: Identity Elements



From Boolean Algebra Axiom $(\text {BA}_2 1)$: Commutativity, we have that $\vee$ and $\wedge$ are commutative on $S$, and so:










\(\ds \forall b \in S: \, \)



\(\ds b \vee \bot\)

\(=\)







\(\ds b\)




















\(\ds b \wedge \top\)

\(=\)







\(\ds b\)









That is:

$\bot$ is an identity element for $\vee$
$\top$ is an identity element for $\wedge$.
$\Box$

All axioms are fulfilled.
$\Box$

Hence the result.
$\blacksquare$





