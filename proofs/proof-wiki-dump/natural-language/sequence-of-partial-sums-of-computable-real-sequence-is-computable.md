# 

Source: https://proofwiki.org/wiki/Sequence_of_Partial_Sums_of_Computable_Real_Sequence_is_Computable

Theorem
Let $\sequence {x_m}_{m \in \N}$ be a computable real sequence.
Let $\sequence{y_N}_{N \in \N}$ be defined as:

$\ds y_N = \sum_{m = 0}^{N - 1} x_m$
Then $\sequence{y_N}$ is a computable real sequence.


Proof
By definition of computable real sequence, there exists a total recursive function $f : \N^2 \to \N$ such that, for all $m, p \in \N$:

$\dfrac {k_{m,p} - 1} {p + 1} < x_m < \dfrac {k_{m,p} + 1} {p + 1}$
where $\map f {m, p}$ codes the integer $k_{m,p}$

Define $g: \N^2 \to \N$ as:

$\ds \map g {N, p} = \map {\operatorname{quot}_\Z} {\sum_{m = 0}^{N - 1} \map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}} +_\Z N_\Z, \paren {2 N}_\Z}$
where $\map {f_\Z} {m, p}$ denotes the integer coded by $\map f {m, p}$.
We have that $g$ is total recursive by:

Bounded Summation of Integers is Primitive Recursive
Predecessor Function is Primitive Recursive
Constant Function is Primitive Recursive
Addition is Primitive Recursive
Multiplication is Primitive Recursive
Code Number for Non-Negative Integer is Primitive Recursive
Addition of Integers is Primitive Recursive
Quotient of Integers is Primitive Recursive
It remains to show that:

$\ds \frac {\map g {N, p} - 1} {p + 1} < \sum_{m = 0}^{N - 1} x_m < \frac {\map g {N, p} + 1} {p + 1}$

If $N = 0$, every summation is empty, so:

$y_N = 0_\Z$
$\map g {0, p} = \map {\operatorname{quot}_\Z} {0, 0} = 0_\Z$
and we get:

$\dfrac {-1} {p + 1} < 0 < \dfrac 1 {p + 1}$
trivially.
Therefore, we will suppose $N \ne 0$ for the remainder of the proof.

We have:

$\map g {N, p} = \floor {\dfrac {\sum_{m = 0}^{N - 1} \map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}} + N} {2 N}}_\Z$
Therefore, by Floor is between Number and One Less:

$\ds \sum_{m = 0}^{N - 1} \frac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}}} {2 N} - \frac 1 2 < \map {g_\Z} {N, p} \le \sum_{m = 0}^{N - 1} \frac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}}} {2 N} + \frac 1 2$
Or, alternatively:

$\ds \map {g_\Z} {N, p} - 1 \le \sum_{m = 0}^{N - 1} \frac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}}} {2 N} - \frac 1 2$
$\ds \sum_{m = 0}^{N - 1} \frac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}}} {2 N} + \frac 1 2 < \map {g_\Z} {N, p} + 1$

By definition of $f$, and for every $m \in \N$:

$\dfrac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}} - 1} {\map {\operatorname{pred}} {2 N \paren {p + 1}} + 1} < x_m < \dfrac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}} + 1} {\map {\operatorname{pred}} {2 N \paren {p + 1}} + 1}$
Since we have assumed $N > 0$, that is equivalent to:

$\dfrac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}} - 1} {2 N \paren {p + 1}} < x_m < \dfrac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}} + 1} {2 N \paren {p + 1}}$
By summing all of these inequalities up to $N - 1$, we get:

$\ds \frac 1 {p + 1} \paren {\sum_{m = 0}^{N - 1} \frac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}}} {2 N} - \frac 1 2} < \sum_{m = 0}^{N - 1} x_m < \frac 1 {p + 1} \paren {\sum_{m = 0}^{N - 1} \frac {\map {f_\Z} {m, \map {\operatorname{pred}} {2 N \paren {p + 1}}}} {2 N} + \frac 1 2}$
But due to the inequalities earlier stated, we find:

$\ds \frac 1 {p + 1} \paren {\map {g_\Z} {N, p} - 1} < \sum_{m = 0}^{N - 1} x_m < \frac 1 {p + 1} \paren {\map {g_\Z} {N, p} + 1}$
which is precisely what was to be shown.
$\blacksquare$





