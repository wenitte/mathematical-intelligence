# 

Source: https://proofwiki.org/wiki/Ordering_on_1-Based_Natural_Numbers_is_Trichotomy

Theorem
Let $\N_{> 0}$ be the $1$-based natural numbers.
Let $<$ be the strict ordering on $\N_{>0}$.

Then exactly one of the following is true:

$(1): \quad a = b$
$(2): \quad a > b$
$(3): \quad a < b$
That is, $<$ is a trichotomy on $\N_{> 0}$.


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







  


Axiom $E$ states:

$\forall a, b \in \N_{>0}$, either:
$a = b$, in which case $(1)$ holds
$\exists x \in \N_{> 0}: a = b + x$, in which case, by definition of the ordering defined, $a > b$, in which case $(2)$ holds
$\exists x \in \N_{> 0}: a + x = b$, in which case, by definition of the ordering defined, $a < b$, in which case $(3)$ holds.
Hence the result.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $2.2$: Theorem $2.8$




