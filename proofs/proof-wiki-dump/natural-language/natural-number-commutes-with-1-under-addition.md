# 

Source: https://proofwiki.org/wiki/Natural_Number_Commutes_with_1_under_Addition



Theorem
Let $n \in \N_{> 0}$ be a natural number.
Then $n$ commutes with $1$ under the operation of addition:

$\forall n \in \N_{> 0}: n + 1 = 1 + n$


Proof
Using the axiomatization:




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

$n + 1 = 1 + n$


Basis for the Induction
Setting $n = 1$ we have that:

$1 + 1 = 1 + 1$
and so $\map P 1$ holds trivially.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$k + 1 = 1 + k$

Then we need to show:

$\paren {k + 1} + 1 = 1 + \paren {k + 1}$


Induction Step
This is our induction step:














\(\ds 1 + \paren {k + 1}\)

\(=\)







\(\ds \paren {1 + k} + 1\)





Axiom $C$














\(\ds \)

\(=\)







\(\ds \paren {k + 1} + 1\)





Induction Hypothesis



So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\blacksquare$


Sources
1964: W.E. Deskins: Abstract Algebra ... (previous) ... (next): $\S 2.1$: Theorem $2.3$



