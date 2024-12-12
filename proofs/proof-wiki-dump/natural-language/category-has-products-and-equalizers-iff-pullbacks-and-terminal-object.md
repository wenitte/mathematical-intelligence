# 

Source: https://proofwiki.org/wiki/Category_has_Products_and_Equalizers_iff_Pullbacks_and_Terminal_Object



Theorem
Let $\mathbf C$ be a metacategory.

Then the following are equivalent:

$(1): \mathbf C$ has all finite products and equalizers.
$(2): \mathbf C$ has all pullbacks and a terminal object.


Proof
$(1)$ implies $(2)$
Suppose $\mathbf C$ has all finite products and equalizers.
That $\mathbf C$ has pullbacks follows from Pullback as Equalizer.
That $\mathbf C$ has a terminal object follows by Empty Product is Terminal Object.
$\Box$


$(2)$ implies $(1)$
Suppose $\mathbf C$ has all pullbacks and a terminal object.

From Category has Finite Products iff Terminal Object and Binary Products, it suffices to check that $\mathbf C$ has binary products.
That this is the case follows from Product as Pullback.

That $\mathbf C$ has equalizers follows from Equalizer as Pullback, as it is established that $\mathbf C$ has finite products.
$\blacksquare$


Sources
2010: Steve Awodey: Category Theory (2nd ed.) ... (next): $\S 5.4$: Proposition $5.14$




