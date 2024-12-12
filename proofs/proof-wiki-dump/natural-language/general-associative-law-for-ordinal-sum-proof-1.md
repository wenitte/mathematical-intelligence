# 

Source: https://proofwiki.org/wiki/General_Associative_Law_for_Ordinal_Sum/Proof_1



Theorem
Let $x$ be a finite ordinal.
Let $\sequence {a_i}$ be a sequence of ordinals.

Then:

$\ds \sum_{i \mathop = 1}^{x + 1} a_i = a_1 + \sum_{i \mathop = 1}^x a_{i + 1}$


Proof
The proof shall proceed by induction on $x$.


Basis for the Induction
If $x = 0$, then:














\(\ds \sum_{i \mathop = 1}^{0 + 1} a_i\)

\(=\)







\(\ds \sum_{i \mathop = 1}^0 a_i + a_1\)





Definition of Ordinal Sum














\(\ds \)

\(=\)







\(\ds a_1\)





Ordinal Addition by Zero














\(\ds \)

\(=\)







\(\ds a_1 + \sum_{i \mathop = 1}^0 a_i\)





Ordinal Addition by Zero



This proves the basis for the induction.
$\Box$


Induction Step
Suppose:

$\ds \sum_{i \mathop = 1}^{x + 1} a_i = a_1 + \sum_{i \mathop = 1}^x a_{i + 1}$
Then:














\(\ds \sum_{i \mathop = 1}^{x + 2} a_i\)

\(=\)







\(\ds \sum_{i \mathop = 1}^{x + 1} a_i + a_{i + 2}\)





Definition of Ordinal Sum














\(\ds \)

\(=\)







\(\ds \paren {a_1 + \sum_{i \mathop = 1}^x a_{i + 1} } + a_{i + 2}\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds a_1 + \paren {\sum_{i \mathop = 1}^x a_{i + 1} + a_{i + 2} }\)





Ordinal Addition is Associative














\(\ds \)

\(=\)







\(\ds a_1 + \sum_{i \mathop = 1}^{x + 1} a_{i + 1}\)





Definition of Ordinal Sum



This proves the induction step.
$\blacksquare$





