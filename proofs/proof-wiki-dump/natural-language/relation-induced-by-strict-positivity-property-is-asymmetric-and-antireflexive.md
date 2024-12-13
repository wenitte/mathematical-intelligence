# 

Source: https://proofwiki.org/wiki/Relation_Induced_by_Strict_Positivity_Property_is_Asymmetric_and_Antireflexive

Theorem
Let $\struct {D, +, \times}$ be an ordered integral domain where $P$ is the (strict) positivity property.
Let the relation $<$ be defined on $D$ as:

$\forall a, b \in D: a < b \iff \map P {-a + b}$

Then $<$ is asymmetric and antireflexive.


Proof
From the trichotomy law of ordered integral domains, for all $x \in D$ exactly one of the following applies:

$(1): \quad \map P x$
$(2): \quad \map P {-x}$
$(3): \quad x = 0$

Let $a, b \in D: a < b$.
Then by definition:

$\map P {-a + b}$
Suppose also that $b < a$.
Then by definition:

$\map P {-b + a}$
and so:

$\map P {-\paren {-a + b} }$
But then that contradicts the trichotomy law of ordered integral domains:
Either:

$(1): \quad \map P {-a + b}$
or:

$(2): \quad \map P {-\paren {-a + b} }$
So $(1)$ and $(2)$ can not both apply, and so if $a < b$ it is not possible that $b < a$.
Thus $<$ is asymmetric.

Now suppose $\exists a \in D: a < a$.
Then that would mean $\map P {-a + a}$, that is, $\map P {0_D}$.
But this also contradicts the conditions of the trichotomy law of ordered integral domains.
Hence:

$\forall a \in D: a \not < a$
and so $<$ is antireflexive.
$\blacksquare$





