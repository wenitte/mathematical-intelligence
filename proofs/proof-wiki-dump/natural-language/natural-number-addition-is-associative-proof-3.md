# 

Source: https://proofwiki.org/wiki/Natural_Number_Addition_is_Associative/Proof_3



Theorem
The operation of addition on the set of natural numbers $\N$ is associative:

$\forall x, y, z \in \N: x + \paren {y + z} = \paren {x + y} + z$


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







  


Let $x, y \in \N_{> 0}$ be arbitrary.
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\paren {x + y} + n = x + \paren {y + n}$


Basis for the Induction
From Axiom $\text C$, we have by definition that:

$\forall x, y \in \N_{> 0}: \paren {x + y} + 1 = x + \paren {y + 1}$
and so $\map P 1$ holds.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\paren {x + y} + k = x + \paren {y + k}$

Then we need to show:

$\paren {x + y} + \paren {k + 1} = x + \paren {y + \paren {k + 1} }$


Induction Step
This is our induction step:















\(\ds \paren {x + y} + \paren {k + 1}\)

\(=\)







\(\ds \paren {\paren {x + y} + k} + 1\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds \paren {x + \paren {y + k} } + 1\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds x + \paren {\paren {y + k} + 1}\)





Basis for the Induction














\(\ds \)

\(=\)







\(\ds x + \paren {y + \paren {k + 1} }\)





Basis for the Induction



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.1$: Theorem $2.2$




