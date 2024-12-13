# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_is_Commutative/Proof_3



Theorem
The operation of addition on the set of natural numbers $\N_{> 0}$ is commutative:

$\forall x, y \in \N_{> 0}: x + y = y + x$


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







  


Let $x \in \N_{> 0}$ be arbitrary.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$x + n = n + x$


Basis for the Induction
From Natural Number Commutes with 1 under Addition, we have that:

$\forall x \in \N_{> 0}: x + 1 = 1 + x$
and so $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$x + k = k + x$

Then we need to show:

$x + \paren {k + 1} = \paren {k + 1} + x$


Induction Step
This is our induction step:














\(\ds x + \paren {k + 1}\)

\(=\)







\(\ds \paren {x + k} + 1\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {k + x} + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds k + \paren {x + 1}\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds k + \paren {1 + x}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {k + 1} + x\)





Natural Number Addition is Associative



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.1$: Theorem $2.3$




