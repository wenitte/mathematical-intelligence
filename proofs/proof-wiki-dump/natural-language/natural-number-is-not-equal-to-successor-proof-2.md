# 

Source: https://proofwiki.org/wiki/Natural_Number_is_Not_Equal_to_Successor/Proof_2

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







  


From axiom $E$:

$E: \quad \forall a, b \in \N_{> 0}: \text{ exactly 1 of these three holds: } a = b \lor \left({\exists x \in \N_{> 0}: a + x = b}\right) \lor \left({\exists y \in \N_{> 0}: a = b + y}\right)$

Hence, taking $a = n$ and $b = n + 1$, we see that since:

$a + 1 = b$
it follows that the middle condition of the three holds:

$\exists x \in \N_{>0}: a + x = b$
Therefore, since exactly one the three holds it must be that:

$n \ne n + 1$
as desired.
$\blacksquare$





