# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Continuous_Complex_Function



Theorem
The following definitions of the concept of Continuous Complex Function are equivalent:
Let $A_1, A_2 \subseteq \C$ be subsets of the complex plane.
Let $f: A_1 \to A_2$ be a complex function from $A_1$ to $A_2$.
Let $a \in A_1$.

Definition using Limit
$f$ is continuous at (the point) $a$ if and only if:

The limit of $\map f z$ as $z \to a$ exists, and
$\ds \lim_{z \mathop \to a} \map f z = \map f a$


Epsilon-Delta Definition
$f$ is continuous at (the point) $a$ if and only if:

$\forall \epsilon > 0: \exists \delta > 0: \forall z \in A_1: \cmod {z - a} < \delta \implies \cmod {\map f z - \map f a} < \epsilon$


Epsilon-Neighborhood Definition
Let $A_1$ be open in $\C$.

$f$ is continuous at (the point) $a$ if and only if:

$\forall \map {\NN_\epsilon} {\map f a}: \exists \map {\NN_\delta} a: f \sqbrk {\map {\NN_\delta} a} \subseteq \map {\NN_\epsilon} {\map f a}$
where $\map {\NN_\epsilon} a$ is the $\epsilon$-neighborhood of $a$ in $A_1$.

That is, for every $\epsilon$-neighborhood of $\map f a$ in $\C$, there exists a $\delta$-neighborhood of $a$ in $\C$ whose image is a subset of that $\epsilon$-neighborhood.


Open Sets Definition
Let $A_1$ be open in $\C$.

$f$ is continuous if and only if:

for every set $U \subseteq \C$ which is open in $\C$, $f^{-1} \sqbrk U$ is open in $\C$.


Proof
Definition using Limit implies Epsilon-Delta Definition
Let $\epsilon > 0$.
By the Epsilon-Delta condition of Definition of Limit of Complex Function, there exists $\delta > 0$, so for all $z \in A_1$:

$ 0 < \cmod {z - a} < \delta \implies \cmod {\map f z - \map f a} < \epsilon $
In the case of $0 = \cmod{ z - a }$, we must have $z = a$, so

$\cmod {\map f z - \map f a} = 0 < \epsilon$
$\Box$

Epsilon-Delta Definition implies Definition using Limit
Let $\epsilon > 0$.
By Epsilon-Delta Definition, there exists $\delta > 0$, so for all $z \in A_1$:

$\cmod {z - a} < \delta \implies \cmod {\map f z - \map f a} < \epsilon $
By the Epsilon-Delta condition of the Definition of Limit of Complex Function, it follows that

$\ds \lim_{z \mathop \to a} \map f z = \map f a$
$\Box$

Epsilon-Delta Definition implies Epsilon-Neighborhood Definition
Let $A_1$ be open in $\C$.
Let $\epsilon > 0$.
By Epsilon-Delta Definition, there exists $\delta_0 > 0$, so for all $z \in A_1$:

$\cmod {z - a} < \delta_0 \implies \cmod {\map f z - \map f a} < \epsilon$
By definition of $\epsilon$-neighborhood, $\cmod {z - a} < \delta_0$ implies $z \in \map { N_{\delta_0} } {a}$.
By definition of open set, there exists $\delta_1 > 0$ so $\map { N_{\delta_1} } {a} \subseteq A_1$.
Set $\delta = \min \paren{ \delta_0 , \delta_1 }$.
Now $\map { N_\delta } {a}  \subseteq \map { N_{\delta_0} } {a}$, and $\map { N_\delta } {a} \subseteq \map { N_{\delta_1} } {a} $.
For all $z \in \map { N_\delta } {a}$, we have: 

$\cmod {\map f z - \map f a} < \epsilon$
which implies $\map f z \in \map { N_\epsilon } { \map f a }$.
It follows that $ f \sqbrk{ \map {N_\delta} a } \subseteq \map { N_\epsilon } { \map f a }$.
$\Box$

Epsilon-Neighborhood Definition implies Epsilon-Delta Definition
Let $A_1$ be open in $\C$.
Let $\epsilon > 0$.
By Epsilon-Neighborhood Definition, there exists $\delta > 0$ such that:

$ f \sqbrk{\map {N_\delta} a} \subseteq \map { N_\epsilon } { \map f a }$.
Let $z \in A_1$ with $\cmod{ z - a } < \delta$.
By definition of $\epsilon$-neighborhood, we have $z \in \map { N_\delta } {a}$.
Then $\map f z \in \map { N_\epsilon } { \map f a }$.
By definition of $\epsilon$-neighborhood, we have $\cmod {\map f z - \map f a} < \epsilon$.
$\Box$

Epsilon-Neighborhood Definition implies Open Sets Definition
Let $A_1$ be open in $\C$.
Let $U \subseteq \C$ be open in $\C$.
Suppose $f^{-1} \sqbrk{ U } = \emptyset$.
Empty Set is Open in Metric Space shows that $f^{-1} \sqbrk{ U }$ is open in $\C$.
Otherwise, let $a \in f^{-1} \sqbrk{ U }$.
Then $\map f a \in U$.
As $U$ is open, there exists $\epsilon > 0$ so $\map { N_\epsilon } { \map f a } \subseteq U$.
By Epsilon-Neighborhood Definition, there exists $\delta > 0$ such that:

$ f \sqbrk{ \map { N_\delta } a } \subseteq \map { N_\epsilon } { \map f a }$
For $z \in \map {N_\delta} a$, we have $\map f z \in \map { N_\epsilon } { \map f a } \subseteq U$.
It follows that $\map {N_\delta} a \subseteq  f^{-1} \sqbrk{ U }$.
By definition of open sets, it follows that $f^{-1} \sqbrk{ U }$ is open.
$\Box$

Open Sets Definition implies Epsilon-Neighborhood Definition
Let $A_1$ be open in $\C$.
Let $a \in A_1$.
Let $\epsilon > 0$.
Open Ball of Metric Space is Open Set shows that $\map{ N_{ \epsilon} }{ \map f a }$ is open in $\C$.
By Open Sets Definition, it follows that $f^{-1} \sqbrk{ \map{ N_{ \epsilon} }{ \map f a } }$ is open in $\C$.
We have $ a \in f^{-1} \sqbrk{ \map{ N_{ \epsilon} }{ \map f a } }$.
As $f^{-1} \sqbrk{ \map{ N_{ \epsilon} }{ \map f a } }$ is open, there exists $\delta > 0$ such that:














\(\ds \map{ N_{ \delta } }{ a }\)

\(\subseteq\)







\(\ds f^{-1} \sqbrk{ \map{ N_{ \epsilon} }{ \map f a } }\)














\(\ds \leadsto \ \ \)





\(\ds f \sqbrk{ \map{ N_{ \delta } }{ a } }\)

\(\subseteq\)







\(\ds \map{ N_{ \epsilon} }{ \map f a }\)









$\blacksquare$





