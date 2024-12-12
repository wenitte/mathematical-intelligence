# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Ordered_Integral_Domain



Theorem
The following definitions of the concept of Ordered Integral Domain are equivalent:

Definition 1
An ordered integral domain is an integral domain $\struct {D, +, \times}$ which has a strict positivity property $P$:




\((\text P 1)\)  

$:$  



Closure under Ring Addition:   

  \(\ds \forall a, b \in D:\)

\(\ds \map P a \land \map P b \implies \map P {a + b} \)   







  


\((\text P 2)\)  

$:$  



Closure under Ring Product:   

  \(\ds \forall a, b \in D:\)

\(\ds \map P a \land \map P b \implies \map P {a \times b} \)   







  


\((\text P 3)\)  

$:$  



Trichotomy Law:   

  \(\ds \forall a \in D:\)

\(\ds \paren {\map P a} \lor \paren {\map P {-a} } \lor \paren {a = 0_D} \)   







  








For $\text P 3$, exactly one condition applies for all $a \in D$.   











  

Definition 2
An ordered integral domain is an ordered ring $\struct {D, +, \times, \le}$ which is also an integral domain.
That is, it is an integral domain with an ordering $\le$ compatible with the ring structure of $\struct {D, +, \times}$:




\((\text {OID} 1)\)  

$:$  



$\le$ is compatible with ring addition:   

  \(\ds \forall a, b, c \in D:\)



   \(\ds a \le b \)

  \(\ds \implies \)  

\(\ds  \paren {a + c} \le \paren {b + c} \)   

  


\((\text {OID} 2)\)  

$:$  



Strict positivity is closed under ring product:   

  \(\ds \forall a, b \in D:\)



   \(\ds 0_D \le a, 0_D \le b \)

  \(\ds \implies \)  

\(\ds  0_D \le a \times b \)   

  



Proof
Let $\struct {D, +, \times}$ be a integral domain whose zero is $0_D$ and whose unity is $1_D$.


$(1)$ implies $(2)$
Let $\struct {D, +, \times \le}$ be a ordered integral domain by definition 1.

By Strict Positivity Property induces Total Ordering, $P$ induces this total ordering $\le$ on $D$.

Thus $\struct {D, +, \times \le}$ is a ordered integral domain by definition 2.
$\Box$


$(2)$ implies $(1)$
Let $\struct {D, +, \times \le}$ be a ordered integral domain by definition 2.
That is, $\struct {D, +, \times}$ has a relation $\le$ which is compatible with the ring structure of $D$:




\((\text {OR} 1)\)  

$:$  



$\le$ is compatible with $+$:   

  \(\ds \forall a, b, c \in  D:\)



   \(\ds a \le b \)

  \(\ds \implies \)  

\(\ds  \paren {a + c} \le \paren {b + c} \)   

  


\((\text {OR} 2)\)  

$:$  



Product of Positive Elements is Positive:   

  \(\ds \forall a, b \in D:\)



   \(\ds 0_D \le x, 0_D \le y \)

  \(\ds \implies \)  

\(\ds  0_D \le x \times y \)   

  


Let $P$ be the set of elements of $D$ which fulfil the conditions:

$P = \set {x \in D: 0_D \le x \land 0_D \ne x}$

We check the (strict) positivity property axioms as follows.
Let $x, y \in P$.
That is:

$0_D \le x \land 0_D \ne x$
$0_D \le y \land 0_D \ne y$

$(\text P 1)$:
Because $\le$ is an ordering, it is a fortiori a preordering.
We have:














\(\ds 0_D + 0_D\)

\(\le\)







\(\ds x + y\)





$\text {OR} 1$: Definition of Ordering Compatible with Ring Structure








\(\ds \leadsto \ \ \)





\(\ds 0_D\)

\(\le\)







\(\ds x + y\)





Preordering of Products under Operation Compatible with Preordering




But as $x, y \ne 0_D$ it follows that:

$0_D \ne x + y$
That is:

$x + y \in P$
So it is seen that $P$ fulfils (strict) positivity property $\text P 1$.

$(\text P 2)$:
From $\text {OR} 2$: Product of Positive Elements is Positive:

$0_D \le x \times y$
We have that:

$0_D \ne x$
and:

$0_D \ne y$

As $\struct {D, +, \times}$ is an integral domain, it has no proper zero divisors by definition.
It follows that:

$0_D \ne x \times y$
and so:

$x \times y \in P$
So it is seen that $P$ fulfils (strict) positivity property $\text P 2$.

$(\text P 3)$:


This needs considerable tedious hard slog to complete it.In particular: The page exists that provides this result, but it needs to be dug out and straightened up.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $\struct {D, +, \times \le}$ is a ordered integral domain by definition 1.
$\blacksquare$





