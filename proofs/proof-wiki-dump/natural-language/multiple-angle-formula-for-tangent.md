# 

Source: https://proofwiki.org/wiki/Multiple_Angle_Formula_for_Tangent



Theorem
$\ds \map \tan {n \theta} = \frac {\ds \sum_{i \mathop = 0}^{\floor{\frac {n - 1} 2} } \paren {-1}^i \binom n {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\floor {\frac n 2} } \paren {-1}^i \binom n {2 i} \tan^{2 i}\theta}$


Proof
Proof by induction:
For all $n \in \N_{\ge 0}$, let $\map P n$ be the proposition:

$\ds \map \tan {n \theta} = \frac {\ds \sum_{i \mathop = 0}^{\floor{\frac {n - 1} 2} } \paren {-1}^i \binom n {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\floor {\frac n 2} } \paren {-1}^i \binom n {2 i} \tan^{2 i}\theta}$


Basis for the Induction
$\map P 0$ is the case:














\(\ds \)

\(\)







\(\ds \frac {\ds \sum_{i \mathop = 0}^{-1} \paren {-1}^i \binom 0 {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^0 \paren {-1}^i \binom 0 {2 i} \tan^{2 i}\theta}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 {\ds \sum_{i \mathop = 0}^0 \paren {-1}^i \binom 0 {2 i} \tan^{2 i}\theta}\)





Because the upper bound is smaller than the lower bound, this results in a vacuous summation and thus is zero.














\(\ds \)

\(=\)







\(\ds \frac 0 {\paren {-1}^0 \dbinom 0 0 \tan^0 \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac 0 1\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(=\)







\(\ds \map \tan {0 \theta}\)









and so can be seen to hold.

$\map P 1$ is the case:














\(\ds \)

\(\)







\(\ds \frac {\ds \sum_{i \mathop = 0}^0 \paren {-1}^i \binom 1 {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^0 \paren {-1}^i \binom 1 {2 i} \tan^{2 i}\theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^0 \dbinom 1 1 \tan^1 \theta} {\paren {-1}^0 \dbinom 1 0 \tan^0 \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {\tan \theta} 1\)




















\(\ds \)

\(=\)







\(\ds \tan \theta\)









and so is also seen to hold.

These two cases together form the basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P {k - 2}$ and $\map P {k - 1}$ is true, where $k > 2$ is an even number, then it logically follows that $\map P k$ and $\map P {k + 1}$ is true.

So this is our induction hypothesis:

$\ds \map \tan {\paren {k - 2} \theta} = \frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta}$
$\ds \map \tan {\paren {k - 1} \theta} = \frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 1} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 1} {2 i} \tan^{2 i}\theta}$

Then we need to show:

$\ds \map \tan {k \theta} = \frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom k {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2} \paren {-1}^i \binom k {2 i} \tan^{2 i}\theta}$
$\ds \map \tan {\paren {k + 1} \theta} = \frac {\ds \sum_{i \mathop = 0}^{\frac k 2} \paren {-1}^i \binom {k + 1} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2} \paren {-1}^i \binom {k + 1} {2 i} \tan^{2 i}\theta}$


Induction Step
This is our induction step:
For the first part:














\(\ds \map \tan {k \theta}\)

\(=\)







\(\ds \map \tan {\paren {k - 2} \theta + 2 \theta}\)




















\(\ds \)

\(=\)







\(\ds \frac {\map \tan {\paren {k - 2} \theta} + \map \tan {2 \theta} } {1 - \map \tan {\paren {k - 2} \theta} \map \tan {2 \theta} }\)





Tangent of Sum














\(\ds \)

\(=\)







\(\ds \frac {\frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta} + \map \tan {2 \theta} } {1 - \frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta} \map \tan {2 \theta} }\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \frac {\frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta} + \frac {\ds 2 \tan \theta} {\ds 1 - \tan^2 \theta} } {1 - \frac {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta} \frac {\ds 2 \tan \theta} {\ds 1 - \tan^2 \theta} }\)





By Double Angle Formula for Tangent














\(\ds \)

\(=\)







\(\ds \frac {\paren {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} \paren {\ds 1 - \tan^2 \theta} - \paren {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta} \paren {\ds 2 \tan \theta} } {\paren {\ds \sum_{i \mathop = 0}^{\frac k 2 - 1} \paren {-1}^i \binom {k - 2} {2 i} \tan^{2 i}\theta} \paren {\ds 1 - \tan^2 \theta} - \paren {\ds \sum_{i \mathop = 0}^{\frac k 2 - 2} \paren {-1}^i \binom {k - 2} {2 i + 1} \tan^{2 i + 1}\theta} \paren {\ds 2 \tan \theta} }\)










For the second part:


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.

So $\map P {k - 2} \land \map P {k - 1} \implies \map P k \land \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\ds \forall n \in \N: \map \tan {n \theta} = \frac {\ds \sum_{i \mathop = 0}^{\floor{\frac {n - 1} 2} } \paren {-1}^i \binom n {2 i + 1} \tan^{2 i + 1}\theta} {\ds \sum_{i \mathop = 0}^{\floor {\frac n 2} } \paren {-1}^i \binom n {2 i} \tan^{2 i}\theta}$
$\blacksquare$


Also see
$n = 2$: Double Angle Formula for Tangent
$n = 3$: Triple Angle Formula for Tangent
$n = 4$: Quadruple Angle Formula for Tangent
$n = 5$: Quintuple Angle Formula for Tangent




