# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_via_Cantor_Normal_Form/Limit_Base



Theorem
Let $x$ and $y$ be ordinals.
Let $x$ be a limit ordinal.
Let $y > 0$.
Let $\sequence {a_i}$ be a sequence of ordinals that is strictly decreasing on $1 \le i \le n$.
Let $\sequence {b_i}$ be a sequence of finite ordinals.

Then:

$\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y = x^{a_1 \mathop + y}$



This article, or a section of it, needs explaining.In particular: Which of the above constructs is actually "Cantor Normal Form"?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Proof
The proof shall proceed by finite induction on $n$:
For all $n \in \N_{\le 0}$, let $\map P n$ be the proposition:

$\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y = x^{a_1 \mathop + y}$

Since $x$ is a limit ordinal, it follows that $x^y$ is a limit ordinal by Limit Ordinals Closed under Ordinal Exponentiation.


Basis for the Induction
$\map P 1$ is the statement:

$\ds \sum_{i \mathop = 1}^1 \paren {x^{a_i} b_i} \times x^y = x^{a_1 \mathop + y}$















\(\ds \sum_{i \mathop = 1}^1 \paren {x^{a_i} b_i} \times x^y\)

\(=\)







\(\ds \paren {x^{a_i} \times b_i} \times x^y\)





Definition of Ordinal Sum














\(\ds \)

\(=\)







\(\ds x^{a_i} \times \paren {b_i \times x^y}\)





Ordinal Multiplication is Associative














\(\ds \)

\(=\)







\(\ds x^{a_i} \times x^y\)





Finite Ordinal Times Ordinal














\(\ds \)

\(=\)







\(\ds x^{a_i \mathop + y}\)





Ordinal Sum of Powers



This is our basis for the induction.
$\Box$


Induction Hypothesis
Now we need to show that, if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \sum_{i \mathop = 1}^k \paren {x^{a_i} b_i} \times x^y = x^{a_1 + y}$

Then we need to show:

$\ds \sum_{i \mathop = 1}^{k \mathop + 1} \paren {x^{a_i} b_i} \times x^y = x^{a_1 \mathop + y}$


Induction Step
This is our induction step:
By Upper Bound of Ordinal Sum, it follows that:

$\ds \sum_{i \mathop = 1}^n \paren {x^{a_{i \mathop + 1} } b_{i \mathop + 1} } < x^{a_1}$

By Membership is Left Compatible with Ordinal Multiplication:














\(\ds x^{a_1} b_1\)

\(\le\)







\(\ds x^{a_1} b_1 + \sum_{i \mathop = 1}^k \paren {x^{a_{i \mathop + 1} } b_{i \mathop + 1} }\)





Ordinal is Less than Sum














\(\ds \)

\(\le\)







\(\ds x^{a_1} b_1 + x^{a_1}\)





Membership is Left Compatible with Ordinal Addition








\(\ds \leadsto \ \ \)





\(\ds x^{a_1} \times b_1 \times x^y\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^{k \mathop + 1} \paren {x^{a_i} b_i} \times x^y\)





Subset is Right Compatible with Ordinal Multiplication and General Associative Law for Ordinal Sum














\(\ds \)

\(\le\)







\(\ds x^{a_1} \times \paren {b_1 + 1} \times x^y\)





Subset is Right Compatible with Ordinal Multiplication




But:














\(\ds x^{a_1} \times b_1 \times x^y\)

\(=\)







\(\ds x^{a_1} \times x^y\)





Finite Ordinal Times Ordinal














\(\ds \)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Ordinal Sum of Powers














\(\ds x^{a_1} \times \paren {b_1 + 1} \times x^y\)

\(=\)







\(\ds x^{a_1} \times x^y\)





Finite Ordinal Times Ordinal














\(\ds \)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Ordinal Sum of Powers




Therefore:














\(\ds x^{a_1 \mathop + y}\)

\(\le\)







\(\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y\)





Substitutivity of Class Equality














\(\ds \)

\(\le\)







\(\ds x^{a_1 \mathop + y}\)





Substitutivity of Class Equality








\(\ds \leadsto \ \ \)





\(\ds \sum_{i \mathop = 1}^n \paren {x^{a_i} b_i} \times x^y\)

\(=\)







\(\ds x^{a_1 \mathop + y}\)





Definition 2 of Set Equality



$\blacksquare$


Also see
Definition:Cantor Normal Form


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.46$




