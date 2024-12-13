# 

Source: https://proofwiki.org/wiki/Inner_Product_on_Space_of_Square_Summable_Mappings_is_Complex_Inner_Product

Theorem
Let $\GF$ be a subfield of $\C$.
Let $I$ be a set.
Let $\map {\ell^2} I$ be the space of square summable mappings over $I$.
Let $\innerprod \cdot \cdot: \map {\ell^2} I \times \map {\ell^2} I \to \GF$ be the inner product on $\map {\ell^2} I$.

Then $\innerprod \cdot \cdot$ is a complex inner product.


Proof
By Space of Square Summable Mappings is $L^2$ Space, $\map {\ell^2} I$ is equal to $\map {L^2} {I, \powerset I, \mu}$.
Here, $\mu$ is the counting measure on the subsets of $I$.

By Inner Product/Examples/Lebesgue 2-Space, there is a complex inner product on $\map {\ell^2} I = \map {L^2} {I, \powerset I, \mu}$ defined by:

$\ds \innerprod f g = \int f ~ \overline g \rd \mu$
By Integral over Counting Measure is Sum over Values, it follows that:

$\ds \innerprod f g = \int f ~ \overline g \rd \mu = \sum_{i \mathop \in I} \map f i \overline{ \map g i }$
which is exactly the definition of the inner product on $\map {\ell^2} I$.
$\blacksquare$





