# 

Source: https://proofwiki.org/wiki/Half-Open_Real_Interval_is_not_Closed_in_Real_Number_Line

Theorem
Let $\R$ be the real number line considered as an Euclidean space.
Let $\hointr a b \subset \R$ be a right half-open interval of $\R$.

Then $\hointr a b$ is not a closed set of $\R$.

Similarly, the left half-open interval $\hointl a b \subset \R$ is not a closed set of $\R$.


Proof
Consider:

$A := \R \setminus \hointr a b = \openint \gets a \cup \hointr b \to$
Let $A:= \openint \gets a$ and let $B := \hointr b \to$.
Let $\map {B_\epsilon} b$ be the open $\epsilon$-ball of $b$.
We have that $b - \epsilon < b$ and so $\map {B_\epsilon} b = \openint {b - \epsilon} {b + \epsilon}$ does not lie entirely in $\hointr b \to$.
Now $b - \epsilon$ may itself lie in $A$.
However:

$\hointr b \to \cap \map {B_\epsilon} b \ne \O$
and so there are elements of $\map {B_\epsilon} b$ which are not in $\openint \gets a \cup \hointr b \to$.
So $\openint \gets a \cup \hointr b \to$ is not an open set of $\R$.
Thus, by definition, $\hointr a b$ is not a closed set of $\R$.
Hence the result.

Mutatis mutandis, the argument also shows that $\hointl a b \subset \R$ is neither an open set nor a closed set of $\R$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $3$: Continuity generalized: topological spaces: $3.7$: Definitions: Examples $3.7.2$




