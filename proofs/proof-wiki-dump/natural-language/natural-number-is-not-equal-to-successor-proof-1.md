# 

Source: https://proofwiki.org/wiki/Natural_Number_is_Not_Equal_to_Successor/Proof_1



Theorem
Let $\N_{> 0}$ be the $1$-based natural numbers:

$\N_{> 0} = \set {1, 2, 3, \ldots}$

Then:

$\forall n \in \N_{> 0}: n \ne n + 1$


Proof
Using the following axioms:




\((\text A)\)  

$:$  





  \(\ds \exists_1 1 \in \N_{> 0}:\)

\(\ds a \times 1 = a = 1 \times a \)   







  


\((\text B)\)  

$:$  





  \(\ds \forall a, b \in \N_{> 0}:\)

\(\ds a \times \paren {b + 1} = \paren {a \times b} + a \)   







  


\((\text C)\)  

$:$  





  \(\ds \forall a, b \in \N_{> 0}:\)

\(\ds a + \paren {b + 1} = \paren {a + b} + 1 \)   







  


\((\text D)\)  

$:$  





  \(\ds \forall a \in \N_{> 0}, a \ne 1:\)

\(\ds \exists_1 b \in \N_{> 0}: a = b + 1 \)   







  


\((\text E)\)  

$:$  





  \(\ds \forall a, b \in \N_{> 0}:\)

\(\ds \)Exactly one of these three holds:\( \)   







  












\(\ds a = b \lor \paren {\exists x \in \N_{> 0}: a + x = b} \lor \paren {\exists y \in \N_{> 0}: a = b + y} \)   







  


\((\text F)\)  

$:$  





  \(\ds \forall A \subseteq \N_{> 0}:\)

\(\ds \paren {1 \in A \land \paren {z \in A \implies z + 1 \in A} } \implies A = \N_{> 0} \)   







  


Proof by induction:
For all $n \in \N_{>0}$, let $P \left({n}\right)$ be the proposition:

$n \ne n + 1$


Basis for the Induction
$P \left({1}\right)$ is the case:

$1 \ne 1 + 1$

From axiom $E$:

$E: \quad \forall a, b \in \N_{> 0}: \text{ exactly 1 of these three holds: } a = b \lor \left({\exists x \in \N_{> 0}: a + x = b}\right) \lor \left({\exists y \in \N_{> 0}: a = b + y}\right)$
Putting $a = b = 1$ this means:

$1 = 1$
or

$1 = 1 + 1$
As $1 = 1$ it follows that $1 \ne 1 + 1$ and so $P \left({1}\right)$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $P \left({k}\right)$ is true, where $k \ge 2$, then it logically follows that $P \left({k+1}\right)$ is true.

So this is our induction hypothesis:

$k \ne k + 1$

Then we need to show:

$k + 1 \ne \left({k + 1}\right) + 1$


Induction Step
This is our induction step:

As $k \ne k + 1$  from the induction hypothesis, it follows that:

$k + 1 \ne \left({k + 1}\right) + 1$
So $P \left({k}\right) \implies P \left({k+1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{> 0}: n \ne n + 1$
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): Exercise $2.1: \ 7$




