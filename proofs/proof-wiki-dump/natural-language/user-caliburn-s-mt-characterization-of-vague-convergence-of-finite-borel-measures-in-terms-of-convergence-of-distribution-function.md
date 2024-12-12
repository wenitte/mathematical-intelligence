# 

Source: https://proofwiki.org/wiki/User:Caliburn/s/mt/Characterization_of_Vague_Convergence_of_Finite_Borel_Measures_in_terms_of_Convergence_of_Distribution_Function



Theorem
Let $K \subseteq \R$ be a closed interval.
Let $\sequence {\mu_n}_{n \mathop \in \N}$ be a sequence of finite Borel measures on $K$ with distribution functions $\sequence {F_{\mu_n} }_{n \mathop \in \N}$. 
Let $\mu$ be a finite Borel measure on $\R$ with distribution function $F_\mu$. 

Then $\sequence {\mu_n}_{n \mathop \in \N}$ converges vaguely to $\mu$ if and only if:

whenever $F_\mu$ is continuous at $x \in K$, we have $\map {F_{\mu_n} } x \to \map {F_\mu} x$.


Proof
Let $\CC$ be the set of continuity points of $F_\mu$.
From Increasing Real Function has Countably Many Discontinuities: Corollary, $\CC$ is everywhere dense in $\R$.

Necessary Condition
Suppose that $\sequence {\mu_n}_{n \mathop \in \N}$ converges vaguely to $\mu$.
Let $x_0, x_1 \in \CC$.
Without loss of generality suppose that $x_0 < x_1$. 
For brevity let $I = \closedint {x_0} {x_1}$.
Let $N \in \N$ be such that:

$\ds N > \frac 2 {x_1 - x_0}$
For $k > N$, use Existence of Smooth Transition Function in One Dimension to find a continuous function $f_k : \R \to \R$ such that:

$\map {f_k} x = 1$ for $\ds x \in \openint {x_0 + \frac 1 k} {x_1 - \frac 1 k}$
and:

$\map {f_k} x = 0$ for $\ds x \in \R \setminus \closedint {x_0 + \frac 1 {2 k} } {x_1 - \frac 1 {2 k} }$.
Since $0 \le f_k \le 1$ and $\map {f_k} x = 0$ for $x \in \R \setminus \closedint {x_0} {x_1}$, we have:

$\map {f_k} x \le \map {\chi_I} x$ for each $x \in \R$.
Also for $k > N$, use Existence of Smooth Transition Function in One Dimension to find a continuous function $g_k : \R \to \R$ such that:

$\map {g_k} x = 1$ for $\ds x \in \openint {x_0 - \frac 1 k} {x_1 + \frac 1 k}$
and:

$\map {g_k} x = 0$ for $\ds x \in \R \setminus \closedint {x_0} {x_1 + \frac 2 k}$.
Since $0 \le g_k \le 1$ and $\map {g_k} x = 1$ for $x \in I$, we have:

$\map {\chi_I} x \le \map {g_k} x$ for each $x \in \R$.
Since $f_k$ and $g_k$ vanish outside of a closed interval, their restrictions to $K$ are compactly supported.
Now, from Integral of Positive Measurable Function is Monotone and Integral of Characteristic Function, we have:

$\ds \int_K f_k \rd \mu \le \map \mu I \le \int_K g_k \rd \mu$
and:

$\ds \int_K f_k \rd \mu_n \le \map {\mu_n} I \le \int_K g_k \rd \mu_n$
Hence:

$\ds \map {\mu_n} I \le -\int_K f_k \rd \mu_n$
and:

$\ds \map \mu I - \map {\mu_n} I \le \int_K g_k \rd \mu - \int_K f_k \rd \mu_n$
We can then write:














\(\ds \int_K g_k \rd \mu - \int_K f_k \rd \mu_n\)

\(=\)







\(\ds \int_K g_k \rd \mu - \int_K f_k \rd \mu + \int_K f_k \rd \mu - \int_K f_k \rd \mu_n\)




















\(\ds \)

\(\le\)







\(\ds \int_K \paren {g_k - f_k} \rd \mu + \size {\int_K f_k \rd \mu - \int_K f_k \rd \mu_n}\)





Integral of Integrable Function is Additive: Corollary 2














\(\ds \)

\(\le\)







\(\ds \int_K \paren {g_k - f_k} \rd \mu + \size {\int_K f_k \rd \mu - \int_K f_k \rd \mu_n} + \size {\int_K g_k \rd \mu_n - \int_K g_k \rd \mu_n}\)









Similarly, we have:














\(\ds \map \mu I - \map {\mu_n} I\)

\(\ge\)







\(\ds \int_K f_k \rd \mu - \int_K g_k \rd \mu_n\)




















\(\ds \)

\(=\)







\(\ds \int_K f_k \rd \mu - \int_K g_k \rd \mu + \int_K g_k \rd \mu_n - \int_K g_k \rd \mu_n\)




















\(\ds \)

\(\ge\)







\(\ds \int_K \paren {f_k - g_k} \rd \mu - \size {\int_K g_k \rd \mu_n - \int_K g_k \rd \mu_n}\)




















\(\ds \)

\(\ge\)







\(\ds -\int_K \paren {g_k - f_k} \rd \mu - \size {\int_K g_k \rd \mu_n - \int_K g_k \rd \mu_n} - \size {\int_K f_k \rd \mu - \int_K f_k \rd \mu_n}\)





Integral of Integrable Function is Homogeneous



Since $f_k \le g_k$, we have:

$\ds \int_K \paren {g_k - f_k} \rd \mu \ge 0$
from Integral of Integrable Function is Monotone.
Hence we have:

$\ds \size {\map \mu I - \map {\mu_n} I} \le \int_K \paren {g_k - f_k} \rd \mu + \size {\int_K g_k \rd \mu_n - \int_K g_k \rd \mu_n} + \size {\int_K f_k \rd \mu - \int_K f_k \rd \mu_n}$
for $k > N$.
Since $f_k$ and $g_k$ have compact support, we have:

$\ds \size {\int_K g_k \rd \mu_n - \int_K g_k \rd \mu_n} \to 0$
and:

$\ds \size {\int_K f_k \rd \mu - \int_K f_k \rd \mu_n} \to 0$
as $n \to \infty$. 
Hence we have:

$\ds \limsup_{n \mathop \to \infty} \size {\map \mu I - \map {\mu_n} I} \le \int_K \paren {g_k - f_k} \rd \mu$
Note that:

$0 \le g_k - f_k \le g_k \le 1$
for each $k > N$.
Since $\mu$ is finite, we have that the constant mapping $1$ is $\mu$-integrable from Integral of Characteristic Function.
We argue that:

$g_k - f_k \to \chi_{\set {x_1} } + \chi_{\set {x_0} }$
as $k \to \infty$.
We can then apply Lebesgue's Dominated Convergence Theorem.

We argue that:

$\map {g_k} x \to \map {\chi_{\closedint {x_0} {x_1} } } x$ for each $x \in \R$
and:

$\map {f_k} x \to \map {\chi_{\openint {x_0} {x_1} } } x$ for each $x \in \R$.
We will then obtain:

$\map {g_k} x - \map {f_k} x \to \map {\chi_{\closedint {x_0} {x_1} \setminus \openint {x_0} {x_1} } } x = \map {\chi_{\set {x_0, x_1} } } x$ for each $x \in \R$.
From Characteristic Function of Disjoint Union, we will then have:

$g_k - f_k \to \chi_{\set {x_1} } + \chi_{\set {x_0} }$
With this argued, we proceed to first showing:

$\map {g_k} x \to \map {\chi_{\closedint {x_0} {x_1} } } x = \map {\chi_I} x$ for each $x \in \R$
We have that:

$\ds \closedint {x_0} {x_1} \subseteq \openint {x_0 - \frac 1 k} {x_1 + \frac 1 k}$
for each $k > N$, and hence:

$\map {g_k} x = 1 = \map {\chi_I} x$ for $x \in I$.
Now take $x \not \in I$. 
Then either $x < x_0$ or $x > x_1$. 
In the former case, we have $\map {g_k} x = 0$ for all $k$.
In the latter case, we can pick:

$\ds k > \frac 2 {x - x_1}$
so that $\map {g_k} x = 0$. 
Hence if $x \not \in I$, we have $\map {g_k} x = \map {\chi_I} x$ for large enough $k$.
Hence we have $g_k \to \chi_I$. 
We now show:

$\map {f_k} x \to \map {\chi_{\openint {x_0} {x_1} } } x$ for each $x \in \R$.
Let $x \in \openint {x_0} {x_1}$. 
Taking:

$\ds k > \max \set {\frac 1 {x_1 - x}, \frac 1 {x - x_0} }$
we obtain:

$\ds x_0 + \frac 1 k < x < x_1 - \frac 1 k$
and hence $\map {f_k} x = 1$. 
Hence $\map {f_k} x \to \map {\chi_{\openint {x_0} {x_1} } } x$ for $x \in \openint {x_0} {x_1}$. 
Now let $x \in \R \setminus \openint {x_0} {x_1}$.
Then we either $x < x_0$, meaning in particular that:

$\ds x < x_0 + \frac 1 {2 k}$ for all $k$
or we have $x > x_1$, meaning that:

$\ds x > x_1 - \frac 1 {2 k}$ for all $k$.
Hence we have $\map {f_k} x \to \map {\chi_{\openint {x_0} {x_1} } } x$ for all $x \in \R$. 
As discussed, we conclude:

$\map {g_k} x - \map {f_k} x \to \map {\chi_{\set {x_0} } } x + \map {\chi_{\set {x_1} } } x$
Hence by Lebesgue's Dominated Convergence Theorem, we obtain:

$\ds \int_K \paren {g_k - f_k} \rd \mu \to \map \mu {\set {x_0} } + \map \mu {\set {x_1} }$
as $k \to \infty$, by Integral of Characteristic Function.
Hence:

$\ds \limsup_{n \mathop \to \infty} \size {\map \mu I - \map {\mu_n} I} \le \map \mu {\set {x_0} } + \map \mu {\set {x_1} }$
Since $x_0, x_1 \in \CC$, we obtain:

$\ds \map \mu {\set {x_0} } + \map \mu {\set {x_1} } = 0$
from Distribution Function of Finite Borel Measure is Continuous at Point iff Measure Continuous at Point.
Hence we have:

$\ds \limsup_{n \mathop \to \infty} \size {\map \mu I - \map {\mu_n} I} = 0$
We have:

$\ds \liminf_{n \mathop \to \infty} \size {\map \mu I - \map {\mu_n} I} \le \limsup_{n \mathop \to \infty} \size {\map \mu I - \map {\mu_n} I}$
so that:

$\ds \liminf_{n \mathop \to \infty} \size {\map \mu I - \map {\mu_n} I} = 0$
From Convergence of Limsup and Liminf, we conclude that:

$\map {\mu_n} {\openint {x_0} {x_1} } \to \map \mu {\openint {x_0} {x_1} }$
whenever $x_0, x_1 \in \CC$.
Now take $x \in \CC$.
Take $N \in \N$ such that $-N < x$. 
Since $\CC$ is everywhere dense in $\R$, for each $k \in \N$ we can pick $x_n \in \CC$ such that $x_k < -\paren {k + N}$.
Since $x_k \to -\infty$ and $x_k < x$ for each $k \in \N$, we have:

$\closedint {x_k} x \cap K \uparrow \hointl {-\infty} x \cap K$
From Measure of Limit of Increasing Sequence of Measurable Sets, we therefore have:

$\map \mu {\closedint {x_k} x \cap K} \to \map \mu {\hointl {-\infty} x \cap K}$ as $k \to \infty$.
Let $\epsilon > 0$. 
Take $k \in \N$ such that:

$\ds \size {\map \mu {\closedint {x_k} x \cap K} - \map \mu {\hointl {-\infty} x \cap K} } < \frac \epsilon 2$
For this $k$, take $N \in \N$ such that:

$\ds \size {\map \mu {\closedint {x_k} x \cap K} - \map {\mu_n} {\hointl {-\infty} x \cap K} } < \frac \epsilon 2$
for $n \ge N$.
Hence by the Triangle Inequality, we have:

$\cmod {\map \mu {\hointl {-\infty} x \cap K} - \map {\mu_n} {\hointl {-\infty} x \cap K} } < \epsilon$
for $n \ge N$.
Since $\epsilon$ was arbitrary, we have:

$\map {F_{\mu_n} } x \to \map {F_\mu} x$ for $x \in \CC$.
This was the demand.
$\Box$


Sufficient Condition
Suppose that:

for all $x \in \CC$, we have $\map {F_{\mu_n} } x \to \map {F_\mu} x$.
Let $f : K \to \R$ be a compactly supported continuous function.
Take $\alpha, \beta \in \R$ such that $\map \supp f \subseteq \openint \alpha \beta \cap K$.
From Real-Valued Continuous Function with Compact Support is Uniformly Continuous, $f$ is uniformly continuous.
Take $\epsilon > 0$. 
Then there exists $\delta > 0$ such that $\size {\map f x - \map f y} < \epsilon$ whenever $x, y \in \R$ satisfy $\size {x - y} < \delta$. 
Let $k \in \N$ be such that:

$\ds k > \max \set {\frac 2 \delta \paren {\beta - \alpha}, 1}$
For each $1 \le j \le k - 1$, take:

$\ds x_j \in \CC \cap \openint {\alpha + \paren {j - 1} \frac {\beta - \alpha} k} {\alpha + j \frac {\beta - \alpha} k}$
This is possible since $\CC$ is everywhere dense in $\R$.
Take $x_0 = \alpha$ and $x_k = \beta$. 
Note that for $0 \le j \le k - 1$, we have:

$\ds x_{j + 1} - x_j \le \frac 2 k \paren {x_k - x_0} < \delta$
Hence:

$\size {\map f {x_{j + 1} } - \map f {x_j} } < \epsilon$
Initially take $n \in \N$ arbitrary. 
Note first that we can write:

$\ds \int_K f \rd \mu = \int_{K \setminus \hointl {x_0} {x_k} } f \rd \mu + \int_{\hointl {x_0} {x_k} \cap K} f \rd \mu$
and similarly:

$\ds \int_K f \rd \mu_n = \int_{K \setminus \hointl {x_0} {x_k} } f \rd \mu_n + \int_{\hointl {x_0} {x_k} \cap K} f \rd \mu_n$
Since $\map f x = 0$ for $x \in K \setminus \hointl {x_0} {x_k}$ by the definition of support, so that:

$\ds \int_K f \rd \mu = \int_{\hointl {x_0} {x_k} \cap K} f \rd \mu$
and:

$\ds \int_K f \rd \mu_n = \int_{\hointl {x_0} {x_k} \cap K} f \rd \mu_n$
We then have:














\(\ds \int_{\hointl {x_0} {x_k} \cap K} f \rd \mu\)

\(=\)







\(\ds \int \chi_{\hointl {x_0} {x_k} \cap K} f \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} f \rd \mu\)





Characteristic Function of Disjoint Union, Integral of Integrable Function is Additive



Similarly:

$\ds \int_{\hointl {x_0} {x_k} \cap K} f \rd \mu_n = \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} f \rd \mu_n$
Hence we can write:














\(\ds \int_K f \rd \mu - \int_K f \rd \mu_n\)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} f \rd \mu - \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} f \rd \mu_n\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} f \rd \mu + \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu - \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu + \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu_n - \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu_n - \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} f \rd \mu_n\)




















\(\ds \)

\(=\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \paren {\map f x - \map f {x_j} } \rd \map \mu x + \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \paren {\map f {x_j} - \map f x} \rd \map {\mu_n} x + \sum_{j \mathop = 0}^{k - 1} \paren {\int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu - \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu_n}\)









From Integral of Characteristic Function and Integral of Integrable Function is Homogeneous, we have:

$\ds \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu - \int_{\hointl {x_j} {x_{j + 1} } \cap K} \map f {x_j} \rd \mu_n = \map f {x_j} \paren {\map \mu {\hointl {x_j} {x_{j + 1} } \cap K} - \map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} }$
From the Triangle Inequality and Triangle Inequality for Integrals, we have:














\(\ds \size {\int_K f \rd \mu - \int_K f \rd \mu_n}\)

\(\le\)







\(\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \size  {\map f x - \map f {x_j} } \rd \map \mu x +  \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \size {\map f {x_j} - \map f x} \rd \map {\mu_n} x + \sum_{j \mathop = 0}^{k - 1} \size {\map f {x_j} } \size {\map \mu {\hointl {x_j} {x_{j + 1} } \cap K} - \map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} }\)









Since $\size {x_j - x_{j + 1} } < \delta$, we have:

$\size {\map f x - \map f {x_j} } < \epsilon$ for $x \in \hointl {x_j} {x_{j + 1} } \cap K$
Hence from Integral of Integrable Function is Monotone, Integral of Integrable Function is Homogeneous and Integral of Characteristic Function, we have:

$\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \size  {\map f x - \map f {x_j} } \rd \map \mu x \le \epsilon \sum_{j \mathop = 0}^{k - 1} \map \mu {\hointl {x_j} {x_{j + 1} } \cap K}$
Since $\mu$ is countably additive, we have:

$\ds \sum_{j \mathop = 0}^{k - 1} \map \mu {\hointl {x_j} {x_{j + 1} } \cap K} = \map \mu {\hointl {x_0} {x_k} \cap K}$
so that:

$\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \size  {\map f x - \map f {x_j} } \rd \map \mu x \le \epsilon \map \mu {\hointl {x_0} {x_k} \cap K}$
Similarly, we have:

$\ds \sum_{j \mathop = 0}^{k - 1} \int_{\hointl {x_j} {x_{j + 1} } \cap K} \size  {\map f x - \map f {x_j} } \rd \map {\mu_n} x \le \epsilon \map {\mu_n} {\hointl {x_0} {x_k} \cap K}$
Finally, note that from Continuous Complex-Valued Function Vanishing at Infinity is Bounded and Attains Supremum:

$\ds M = \sup_{x \in \R} \size {\map f x} < \infty$
Since $x_k \in \CC$ for each $k$, we have:

$\ds \map {F_{\mu_n} } {x_k} \to \map {F_\mu} {x_k}$ as $n \to \infty$
for each $k$.
We therefore have:

$\map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} = \map {F_{\mu_n} } {x_{j + 1} } - \map {F_{\mu_n} } {x_j}$
from Measure of Set Difference with Subset.
Hence:

$\map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} \to \map {F_\mu} {x_{j + 1} } - \map {F_\mu} {x_j} = \map \mu {\hointl {x_j} {x_{j + 1} } \cap K}$ as $n \to \infty$
for each $j$.
Hence we can find $N_j \in \N$ such that:

$\ds \size {\map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} - \map \mu {\hointl {x_j} {x_{j + 1} } \cap K} } < \frac \epsilon k$
for $n \ge N_j$. 
Hence for $n \ge \max \set {N_1, \ldots, N_k} := N$, we have:

$\ds \size {\map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} - \map \mu {\hointl {x_j} {x_{j + 1} } \cap K} } < \frac \epsilon k$
giving:

$\ds \sum_{j \mathop = 0}^{k - 1} \size {\map f {x_j} } \size {\map \mu {\hointl {x_j} {x_{j + 1} } \cap K} - \map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} } < k \frac {M \epsilon} k = M \epsilon$
To be explicit, we now have:

$\ds \size {\int f \rd \mu - \int f \rd \mu_n} \le \epsilon \paren {\map \mu {\hointl {x_0} {x_k} \cap K} + \map {\mu_n} {\hointl {x_0} {x_k} \cap K} } + \frac {M \epsilon} 2$
We want to eliminate remaining dependence on $n$ in the right hand side.
By the countable additivity of $\mu$ and $\mu_n$, we have:

$\ds \map \mu {\hointl {x_0} {x_k} \cap K} + \map {\mu_n} {\hointl {x_0} {x_k} \cap K} = \sum_{j \mathop = 0}^{k - 1} \paren {\map \mu {\hointl {x_j} {x_{j + 1} } \cap K} + \map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} }$
Since:

$\ds \size {\map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} - \map \mu {\hointl {x_j} {x_{j + 1} } \cap K} } < \frac \epsilon {2 k}$
we have:

$\ds \map {\mu_n} {\hointl {x_j} {x_{j + 1} } \cap K} \le \map \mu {\hointl {x_j} {x_{j + 1} } \cap K} + \frac \epsilon k$
So we have:

$\ds \sum_{j \mathop = 0}^{k - 1} \paren {\map \mu {\hointl {x_j} {x_{j + 1} } \cap K} + \map {\mu_n} {\hointl {x_j} {x_{j + 1} } } \cap K} \le \epsilon + \sum_{j \mathop = 0}^{k - 1} \map \mu {\hointl {x_j} {x_{j + 1} } \cap K}$
Using the countable additivity of $\mu$ again we have:

$\ds \sum_{j \mathop = 0}^{k - 1} \map \mu {\hointl {x_j} {x_{j + 1} } \cap K} = \map \mu {\hointl {x_0} {x_k} \cap K}$
Hence we have:

$\ds \size {\int_K f \rd \mu - \int_K f \rd \mu_n} \le \epsilon \paren {2 \map \mu {\hointl {x_0} {x_k} \cap K} + \frac \epsilon k} + M \epsilon \le 2 \epsilon \map \mu K + 2 \epsilon + M \epsilon$
for $n \ge N$.
Note that as $\epsilon \to 0^+$, we have:

$\ds 2 \epsilon \map \mu \R + 2 \epsilon + M \epsilon \to 0$
Hence, since $\epsilon$ was arbitrary in the above, we have:

$\ds \size {\int_K f \rd \mu - \int_K f \rd \mu_n} \to 0$ as $n \to \infty$.
Hence $\sequence {\mu_n}_{n \mathop \in \N}$ converges vaguely to $\mu$.
$\blacksquare$


Sources
2014: Gerald Teschl: Mathematical Methods in Quantum Mechanics With Applications to Schrödinger Operators (2nd ed.) ... (previous) ... (next): $\text A.8$: Vague convergence of measures




