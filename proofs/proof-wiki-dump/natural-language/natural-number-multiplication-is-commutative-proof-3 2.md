# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_is_Commutative/Proof_3



Theorem
The operation of multiplication on the set of natural numbers $\N$ is commutative:

$\forall x, y \in \N: x \times y = y \times x$


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







  


For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall a \in \N_{> 0}: a \times n = n \times a$


Basis for the Induction
$\map P 1$ is the case:














\(\ds a \times 1\)

\(=\)







\(\ds a\)





Axiom $\text A$














\(\ds \)

\(=\)







\(\ds 1 \times a\)





Axiom $\text A$



and so $\map P 1$ holds.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall a \in \N: a \times k = k \times a$

Then we need to show:

$\forall a \in \N: a \times \paren {k + 1} = \paren {k + 1} \times a$


Induction Step
This is our induction step:














\(\ds a \times \paren {k + 1}\)

\(=\)







\(\ds \paren {a \times k} + \paren {a \times 1}\)





Left Distributive Law for Natural Numbers














\(\ds \)

\(=\)







\(\ds \paren {k \times a} + \paren {a \times 1}\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {k \times a} + \paren {1 \times a}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {k + 1} \times a\)





Right Distributive Law for Natural Numbers



The result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.1$: Theorem $2.6$




