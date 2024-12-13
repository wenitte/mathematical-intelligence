# 

Source: https://proofwiki.org/wiki/Positive_Rational_Numbers_under_Addition_form_Ordered_Semigroup/Proof_1

Theorem
Let $\Q_{\ge 0}$ denote the set of positive rational numbers.
The algebraic structure:

$\struct {\Q_{\ge 0}, +, \le}$
forms an ordered semigroup.


Proof
It is necessary to ascertain that $\struct {\Q_{\ge 0}, +, \le}$ fulfils the ordered semigroup axioms:
An ordered semigroup is an algebraic system $\struct {S, \circ, \preceq}$ which satisfies the following properties:




\((\text {OS} 0)\)  

$:$  



Closure   

  \(\ds \forall a, b \in S:\)

\(\ds a \circ b \in S \)   







  


\((\text {OS} 1)\)  

$:$  



Associativity   

  \(\ds \forall a, b, c \in S:\)

\(\ds a \circ \paren {b \circ c} = \paren {a \circ b} \circ c \)   







  


\((\text {OS} 2)\)  

$:$  



Compatibility of $\preceq$ with $\circ$   

  \(\ds \forall a, b, c \in S:\)

\(\ds a \preceq b \implies \paren {a \circ c} \preceq \paren {b \circ c} \)   







  








where $\preceq$ is an ordering   



\(\ds a \preceq b \implies \paren {c \circ a} \preceq \paren {c \circ b} \)   







  


From Rational Numbers form Totally Ordered Field, $\struct {\Q, +, \times, \le}$ is a totally ordered field.
Hence $\struct {\Q, +, \le}$ is an ordered group, and so an ordered semigroup.

From Positive Rational Numbers are Closed under Addition we have that $\text {OS} 0$ holds.
From Restriction of Associative Operation is Associative we have that $\text {OS} 1$ holds.
From Restriction of Ordering is Ordering we have that $\text {OS} 2$ holds.
The result follows.
$\blacksquare$





