# 

Source: https://proofwiki.org/wiki/Natural_Number_Multiplication_Distributes_over_Addition/Proof_3



Theorem
The operation of multiplication is distributive over addition on the set of natural numbers $\N$:

$\forall x, y, z \in \N:$
$\paren {x + y} \times z = \paren {x \times z} + \paren {y \times z}$
$z \times \paren {x + y} = \paren {z \times x} + \paren {z \times y}$


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







  



Left Distributive Law for Natural Numbers
First we show that:

$n \times \paren {x + y} = \paren {n \times x} + \paren {n \times y}$

Let us cast the proposition in the form:

$\forall a, b, n \in \N_{> 0}: a \times \paren {b + n} = \paren {a \times b} + \paren {a \times n}$
For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall a, b \in \N_{> 0}: a \times \paren {b + n} = \paren {a \times b} + \paren {a \times n}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds a \times \paren {b + 1}\)

\(=\)







\(\ds \paren {a \times b} + a\)





Axiom $\text B$














\(\ds \)

\(=\)







\(\ds \paren {a \times b} + \paren {a \times 1}\)





Axiom $\text A$



and so $\map P 1$ holds.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall a, b \in \N_{> 0}: a \times \paren {b + k} = \paren {a \times b} + \paren {a \times k}$

Then we need to show:

$\forall a, b \in \N_{> 0}: a \times \paren {b + \paren {k + 1} } = \paren {a \times b} + \paren {a \times \paren {k + 1} }$


Induction Step
This is our induction step:














\(\ds a \times \paren {b + \paren {k + 1} }\)

\(=\)







\(\ds a \times \paren {\paren {b + k} + 1}\)





Axiom $\text C$














\(\ds \)

\(=\)







\(\ds \paren {a \times \paren {b + k} } + a\)





Axiom $\text B$














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \times b} + \paren {a \times k} } + a\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {a \times b} + \paren {\paren {a \times k} + a}\)





Natural Number Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {a \times b} + \paren {a \times \paren {k + 1} }\)





Axiom $\text B$



The result follows by the Principle of Mathematical Induction.
$\Box$


Right Distributive Law for Natural Numbers
Then we show that:

$\paren {x + y} \times n = \paren {x \times n} + \paren {y \times n}$

For all $n \in \N_{> 0}$, let $\map P n$ be the proposition:

$\forall a, b \in \N_{> 0}: \paren {a + b} \times n = \paren {a \times n} + \paren {b \times n}$


Basis for the Induction
$\map P 1$ is the case:














\(\ds \paren {a + b} \times 1\)

\(=\)







\(\ds a + b\)





Axiom $\text A$














\(\ds \)

\(=\)







\(\ds \paren {a \times 1} + \paren {b \times 1}\)





Axiom $\text A$



and so $\map P 1$ holds.

This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 0$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\forall a, b \in \N_{> 0}: \paren {a + b} \times k = \paren {a \times k} + \paren {b \times k}$

Then we need to show:

$\forall a, b \in \N_{> 0}: \paren {a + b} \times \paren {k + 1} = \paren {a \times \paren {k + 1} } + \paren {b \times \paren {k + 1} }$


Induction Step
This is our induction step:














\(\ds \paren {a + b} \times \paren {k + 1}\)

\(=\)







\(\ds \paren {\paren {a + b} \times k} + \paren {a + b}\)





Axiom $\text B$














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \times k} + \paren {b \times k} } + \paren {a + b}\)





Induction hypothesis














\(\ds \)

\(=\)







\(\ds \paren {\paren {a \times k} + a} + \paren {\paren {b \times k} + b}\)





Natural Number Addition is Commutative














\(\ds \)

\(=\)







\(\ds \paren {a \times \paren {k + 1} } + \paren {b \times \paren {k + 1} }\)





Axiom $\text B$



The result follows by the Principle of Mathematical Induction.
$\Box$
The result follows.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.1$




