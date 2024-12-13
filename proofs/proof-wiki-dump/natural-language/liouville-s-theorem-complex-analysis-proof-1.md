# 

Source: https://proofwiki.org/wiki/Liouville%27s_Theorem_(Complex_Analysis)/Proof_1

Theorem
Let $f: \C \to \C$ be a bounded entire function.

Then $f$ is constant.


Proof
By assumption, there is $M \ge 0$ such that $\cmod {\map f z} \le  M$ for all $z \in \C$. 
For any $R \in \R: R > 0$, consider the function:

$\map {f_R} z := \map f {R z}$
Using the Cauchy Integral Formula, we see that:

$\ds \cmod {\map {f_R'} z} = \frac 1 {2 \pi} \cmod {\int_{\map {C_1} z} \frac {\map {f_R} w} {\paren {w - z}^2} \rd w} \le \frac 1 {2 \pi} \int_{\map {C_1} z} M \cmod {\d w} = M$
where $\map {C_1} z$ denotes the circle of radius $1$ around $z$.


Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: $\int_{\map {C_1} z} M \cmod {\d w}$ must be defined.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence:

$\ds \cmod {\map {f'} z} = \cmod {\map {f_R'} z} / R \le M / R$
Since $R$ was arbitrary, it follows that $\cmod {\map {f'} z} = 0$ for all $z \in \C$.
Thus $f$ is constant.
$\blacksquare$


Source of Name
This entry was named for Joseph Liouville.





